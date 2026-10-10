/* Praca bez sieci.
 *
 * Stroik nie ma się z czym łączyć: cała aplikacja to jeden plik, bez żadnych
 * zapytań na zewnątrz. Sieć jest potrzebna wyłącznie do pierwszego pobrania.
 * Ten plik zatrzymuje komplet w pamięci podręcznej przeglądarki, żeby kolejne
 * uruchomienia obywały się bez internetu — w sali prób, za kulisami czy
 * w lesie zasięg bywa żaden, a stroić trzeba.
 *
 * Strategia: najpierw pamięć podręczna, w tle odświeżenie. Dzięki temu
 * aplikacja startuje natychmiast, a nowa wersja wchodzi przy kolejnym
 * otwarciu. Dla stroika to właściwy kompromis — liczy się czas startu,
 * nie świeżość treści, która zmienia się raz na kilka miesięcy.
 */
const CACHE = "stroik-v1.2";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(FILES.map(f => c.add(f))))
      .catch(() => {})
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  // Obsługujemy wyłącznie własne pliki i wyłącznie odczyt.
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(hit => {
      const fresh = fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      // Z pamięci natychmiast, gdy coś tam jest; z sieci dopiero gdy nie ma.
      // Przy nawigacji bez sieci i bez trafienia wracamy do strony głównej,
      // żeby aplikacja wstała nawet przy wejściu pod inny adres.
      return hit || fresh.then(r => r || caches.match("./index.html"));
    })
  );
});
