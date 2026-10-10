STROIK NA iPHONE'A                                                 wersja 1.2
Stroik do ukulele, mandoliny, gitary sześciostrunowej i gitary basowej.


CZEGO NIE DA SIĘ POMINĄĆ

  Pliki trzeba najpierw umieścić w internecie, pod adresem zaczynającym się
  od https. Nie jest to formalność: Safari udostępnia mikrofon wyłącznie
  stronom otwartym połączeniem zabezpieczonym. Plik przesłany do iPhone'a
  i otwarty z aplikacji Pliki mikrofonu nie dostanie — zobaczysz stroik,
  który nic nie słyszy.

  Publikacja jest darmowa i zajmuje kilka minut. Niżej dwie drogi.
  Po publikacji adres działa na stałe, także dla innych Twoich urządzeń.


DROGA PIERWSZA: GITHUB PAGES (darmowy, na stałe)

  1. Wejdź na github.com i zaloguj się.
  2. Przycisk „+” w prawym górnym rogu > „New repository”.
  3. Nazwa: stroik. Zaznacz „Public”. Kliknij „Create repository”.
  4. Na stronie nowego repozytorium kliknij „uploading an existing file”.
  5. Przeciągnij do okna przeglądarki WSZYSTKIE pliki z tego folderu
     (index.html, manifest.webmanifest, sw.js i cztery pliki icon-*.png).
     Uwaga: przeciągnij same pliki, nie folder.
  6. Na dole strony kliknij „Commit changes”.
  7. Zakładka „Settings” > w menu po lewej „Pages”.
  8. W „Source” wybierz „Deploy from a branch”, gałąź „main”, folder „/ (root)”.
     Kliknij „Save”.
  9. Odczekaj minutę i odśwież stronę — u góry pojawi się adres, zwykle:

        https://TWOJA-NAZWA.github.io/stroik/

     To jest adres aplikacji. Zapisz go.


DROGA DRUGA: NETLIFY DROP (szybsza, wymaga założenia konta)

  1. Wejdź na app.netlify.com/drop
  2. Przeciągnij CAŁY ten folder na pole w środku strony.
  3. Po chwili dostaniesz adres https. Żeby strona została na stałe,
     Netlify poprosi o założenie darmowego konta.


INSTALACJA NA iPHONIE

  1. Otwórz adres w SAFARI. Musi to być Safari — inne przeglądarki na iOS
     nie dodają aplikacji do ekranu początkowego, tylko zwykłą zakładkę.
  2. Dotknij przycisku udostępniania (kwadrat ze strzałką w górę, na dole).
  3. Przewiń listę i wybierz „Do ekranu początkowego”.
  4. Potwierdź „Dodaj”. Na ekranie pojawi się ikona Stroika.
  5. Uruchom aplikację z tej ikony — otworzy się bez paska adresu
     i bez zakładek, jak zwykły program.
  6. Dotknij „Włącz mikrofon” i zezwól na dostęp, gdy iPhone zapyta.

  Zgody na mikrofon udziela się osobno dla aplikacji z ekranu początkowego,
  nawet jeśli wcześniej zezwoliłeś na nią w Safari. iOS traktuje je jak dwa
  różne miejsca.


PO INSTALACJI

  Aplikacja działa bez internetu — przy pierwszym otwarciu zapisuje się
  w pamięci telefonu. Zasięg jest potrzebny tylko za pierwszym razem.

  Ekran nie gaśnie, dopóki mikrofon jest włączony. Po jego wyłączeniu
  telefon wraca do normalnego wygaszania.

  Aby ją usunąć: przytrzymaj ikonę > „Usuń aplikację”.

  Aktualizacja: wgraj nowe pliki w to samo miejsce, a aplikacja pobierze je
  przy kolejnym uruchomieniu z zasięgiem.


GDY NIE SŁYCHAĆ DŹWIĘKU WZORCOWEGO

  Sprawdź boczny przełącznik wyciszenia iPhone'a. W pozycji cichej wycisza
  także dźwięk ze stron internetowych, a więc i ze Stroika. Głośność ustawia
  się przyciskami telefonu, niezależnie od suwaka w aplikacji.

  Wzorce E1 (41 Hz) i A1 (55 Hz) będą na głośniku telefonu ciche niezależnie
  od ustawień — membrana tej wielkości nie przenosi tak niskich dźwięków.
  To fizyka, nie usterka. Użyj słuchawek albo włącz „Oktawa: +1”.


GDY MIKROFON NIE DZIAŁA

  Aplikacja powie, co jest nie tak. Trzy najczęstsze przyczyny:

  - Adres zaczyna się od http, nie https. Mikrofon wtedy nie zadziała nigdy.
  - Zgoda została wcześniej odrzucona. Przytrzymaj ikonę aplikacji, wejdź
    w jej ustawienia i włącz mikrofon. Dla Safari: Ustawienia > Safari > Mikrofon.
  - Mikrofon zajmuje inna aplikacja — zamknij rozmowę albo dyktafon.


CO JEST W FOLDERZE

  index.html              cała aplikacja: układ, style i kod w jednym pliku
  manifest.webmanifest    opis aplikacji dla systemu: nazwa, ikony, kolory
  sw.js                   mechanizm pracy bez internetu
  icon-180.png            ikona ekranu początkowego iPhone'a
  icon-192.png            ikona dla pozostałych systemów
  icon-512.png            ikona w dużej rozdzielczości
  icon-maskable-512.png   wariant przycinany do koła (Android)

  Wszystkie pliki muszą leżeć w jednym katalogu, obok siebie.
  Aplikacja nie wykonuje ani jednego zapytania na zewnątrz — nic nie wysyła
  i niczego nie pobiera poza własnymi plikami.


OBSŁUGIWANE INSTRUMENTY I STROJE

  Ukulele      GCEA sopranowe/koncertowe/tenorowe, GCEA z niskim G,
               DGBE barytonowe, ADF#B strój D
  Mandolina    GDAE standard, GDGD strój krzyżowy, CGDA mandola altowa,
               GDAE mandolina oktawowa, CGDA mandocela
  Gitara       EADGBE standard, DADGBE drop D, pół tonu niżej, DADGAD,
               DGDGBD open G
  Bas          EADG, DADG drop D, HEADG pięciostrunowy, pół tonu niżej

  Kamerton A4 przestawialny w zakresie 392–466 Hz.


WYMAGANIA

  iPhone z iOS 16.4 lub nowszym (mikrofon w aplikacjach z ekranu początkowego
  działa od iOS 13.4; blokada wygaszania ekranu od 16.4 — bez niej aplikacja
  działa tak samo, tylko ekran gaśnie normalnie).
  Ten sam adres otwiera się też na Androidzie i w każdej przeglądarce na
  komputerze.
