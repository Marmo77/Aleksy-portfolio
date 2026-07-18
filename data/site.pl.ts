import type { SiteContent } from "./site.en";

export const sitePl: SiteContent = {
  companyName: "ADobrodziej.",
  fullName: "Aleksy Dobrodziej",
  role: "Programista frontend",
  nav: [
    { label: "O mnie", href: "#about" },
    { label: "Umiejętności", href: "#skills" },
    { label: "Agencja", href: "#agency" },
    { label: "Projekty", href: "#projects" },
    { label: "Kontakt", href: "#contact" },
  ],

  hero: {
    eyebrow:
      "Programista z Polski · w październiku zaczynam studia IT · otwarty na staże",
    headline: ["Programista frontend,", "tworzę kompletne produkty."],
    paragraph:
      "Projektuję i tworzę prawdziwe, działające aplikacje — od stron marketingowych po panel administracyjny z bazą danych i logowaniem. Jestem samoukiem, a swój postęp mierzę commitami i wdrożonymi funkcjami, a nie stanowiskami. W październiku zaczynam studia informatyczne.",
    stats: [
      { value: "1,141", label: "commitów rocznie", live: true },
      { value: "6", label: "wdrożonych projektów" },
      { value: "🇵🇱", label: "Team Poland · MOS 2026" },
    ],
    githubHandle: "Marmo77",
    contributionsLastYear: 1141,
    marqueeItems: [
      "React",
      "Next.js",
      "Vercel",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Bits",
      "ESLint",
      "Supabase",
      "OAuth",
      "Vite",
      "Git",
      "Python",
      "GitHub",
    ],
  },

  about: {
    sectionLabel: "01 — O mnie",
    heading: "Liczą się projekty, nie CV.",
    paragraphs: [
      "Jestem Aleksy — programista z Polski (19 lat). Właśnie skończyłem technikum o profilu programistycznym, gdzie razem z maturą zdałem oba egzaminy zawodowe (INF.03, INF.04).",
      "Poza szkołą samodzielnie nauczyłem się Reacta, TypeScriptu i Pythona, tworząc rzeczy, z których ludzie naprawdę korzystają: stronę agencji, makietę zamówień dla restauracji oraz — mój najbardziej rozbudowany projekt — panel administracyjny serwisu samochodowego z logowaniem i pełną relacyjną bazą danych.",
      "W październiku zaczynam studia informatyczne i szukam stażu lub współpracy, którą mógłbym prowadzić równolegle — czegoś, co pozwoli mi dalej tworzyć realne projekty w trakcie studiów.",
    ],
    journeyLabel: "Moja droga do tej pory",
    journey: [
      {
        title: "Początki — samouk",
        description:
          "Zacząłem samodzielnie budować strony — od HTML/CSS, przez Reacta, po programowanie obiektowe w Pythonie, żeby ogarnąć również logikę backendu.",
      },
      {
        title: "Technikum — technik programista",
        period: "2021 – 2026",
        description:
          "Zdane egzaminy zawodowe INF.03 i INF.04 oraz solidne wyniki matury (matematyka 92%, angielski 97%).",
      },
      {
        title: "Praktyki IT — Rimini, Włochy",
        description:
          "Miesięczny staż zagraniczny w ramach programu Europass — praca w środowisku IT za granicą.",
      },
      {
        title: "Team Poland — MOS 2026",
        description:
          "Powołany do reprezentowania Polski na Mistrzostwach Świata Microsoft Office Specialist (w USA) w kategorii Excel — dzięki kilku zdanym certyfikatom Excel Expert.",
      },
      {
        title: "Start studiów — informatyka",
        period: "Październik 2026",
        description:
          "Rozpoczynam studia informatyczne, a równolegle szukam stażu lub współpracy, żeby dalej realizować prawdziwe projekty obok nauki.",
      },
    ],
  },

  skills: {
    sectionLabel: "02 — Stack",
    heading: "Czym naprawdę buduję.",
    subheading:
      "Żadnej rozdmuchanej listy — to dokładnie ten stack, który stoi za każdym projektem na tej stronie.",
    cards: [
      {
        id: "frontend",
        title: "Frontend",
        description:
          "Tu spędzam najwięcej czasu — interfejsy, które są przemyślane, a nie domyślne. Każdy projekt na tej stronie powstał na dokładnie tej kombinacji.",
        badges: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Bits"],
        codeWindow: {
          filename: "stack.ts",
          lines: [
            [
              { type: "key", text: "const" },
              { type: "var", text: " stack" },
              { type: "plain", text: " = {" },
            ],
            [
              { type: "prop", text: "  ui" },
              { type: "plain", text: ": [" },
              { type: "str", text: '"React"' },
              { type: "plain", text: ", " },
              { type: "str", text: '"TypeScript"' },
              { type: "plain", text: "]," },
            ],
            [
              { type: "prop", text: "  styling" },
              { type: "plain", text: ": [" },
              { type: "str", text: '"Tailwind CSS"' },
              { type: "plain", text: "]," },
            ],
            [
              { type: "prop", text: "  components" },
              { type: "plain", text: ": [" },
              { type: "str", text: '"shadcn/ui"' },
              { type: "plain", text: ", " },
              { type: "str", text: '"React Bits"' },
              { type: "plain", text: "]," },
            ],
            [{ type: "plain", text: "};" }],
          ],
        },
      },
      {
        id: "backend",
        title: "Backend / BaaS",
        description:
          "Supabase do logowania, bazy danych i przechowywania plików — realnie wykorzystane w projekcie Car Service Dashboard.",
        badges: ["Supabase", "PostgreSQL", "OAuth", "Python (OOP)"],
      },
      {
        id: "excel",
        title: "Excel i produktywność",
        description:
          "Certyfikowana umiejętność, która stoi za powołaniem do Team Poland MOS 2026 — przy pracy dla klientów swobodnie korzystam też z Photoshopa i Figmy.",
        badges: ["Excel Expert", "Adobe Photoshop", "Figma"],
        highlightBadge: "Excel Expert",
        stat: { value: "5×", label: "zdanych egzaminów Microsoft Excel Expert" },
      },
    ],
  },

  evidence: {
    sectionLabel: "03 — Dowody",
    heading: "Konkrety, nie przymiotniki.",
    githubHandle: "github.com/Marmo77",
    stats: [
      {
        id: "contributions",
        value: "1,141",
        description:
          "Commity na GitHubie z ostatniego roku — regularnie, a nie jednorazowy zryw.",
        span: 3,
        hero: true,
      },
      { id: "math", value: "92%", description: "Wynik matury — matematyka", span: 3 },
      {
        id: "english",
        value: "97%",
        description: "Wynik matury — angielski (pisemny)",
        span: 3,
      },
      {
        id: "excel-count",
        value: "5×",
        description: "Zdane certyfikaty Microsoft Excel Expert",
        span: 2,
      },
      {
        id: "team-poland",
        title: "Team Poland",
        description: "Powołanie na Mistrzostwa Świata MOS 2026, kategoria Excel",
        span: 2,
      },
      {
        id: "adobe",
        title: "Adobe Certified",
        description: "Projektowanie graficzne w Adobe Photoshop",
        span: 2,
      },
      {
        id: "europass",
        title: "Europass",
        description: "Miesięczny staż IT — Rimini, Włochy",
        span: 2,
      },
      {
        id: "inf",
        title: "INF.03 / INF.04",
        description: "Krajowe egzaminy zawodowe z programowania — zdane",
        span: 2,
      },
      {
        id: "languages",
        title: "Języki",
        description: "Polski (ojczysty) · angielski (biegle, C1)",
        span: 2,
      },
    ],
  },

  agency: {
    sectionLabel: "04 — Poza kodem",
    heading: "Prowadzę małą agencję webową — AD.digital.",
    paragraph:
      "Obok studiów i własnych projektów projektuję i tworzę kompletne strony internetowe dla lokalnych firm w okolicach Szczecina — restauracji, agencji ubezpieczeniowych, serwisów samochodowych czy producentów mebli. Cały proces prowadzę sam, od początku do końca.",
    ctaLabel: "Odwiedź AD.digital",
    ctaUrl: "https://addigital.vercel.app/",
    services: [
      {
        icon: "webdev",
        title: "Projektowanie i budowa stron",
        description: "Kompletne realizacje od projektu po wdrożenie, na Next.js i Tailwind.",
      },
      {
        icon: "seo",
        title: "SEO i wyszukiwanie lokalne",
        description:
          "Semantyczna struktura i optymalizacja on-page pod lokalne frazy wyszukiwania.",
      },
      {
        icon: "maps",
        title: "Google Maps i Wizytówka Google",
        description:
          "Zakładanie i optymalizacja Wizytówki Google, żeby klienci znajdowali firmę tam, gdzie faktycznie szukają.",
      },
      {
        icon: "support",
        title: "Bieżące wsparcie",
        description:
          "Klienci piszą do mnie bezpośrednio w sprawie zmian i aktualizacji — bez systemu zgłoszeń.",
      },
    ],
    stats: [
      { value: "5+", label: "zrealizowanych stron" },
      { value: "5", label: "obsłużonych miast" },
      { value: "100%", label: "samodzielnie, od A do Z" },
    ],
  },

  projects: {
    sectionLabel: "05 — Projekty",
    heading: "Wybrane realizacje.",
    subheading:
      "Sześć konkretnych projektów — od stron marketingowych po panel administracyjny z pełnym uwierzytelnianiem. Każdy z linkiem do szczegółów i kodu źródłowego.",
    viewAllLabel: "Zobacz wszystkie repozytoria na GitHubie",
    viewAllUrl: "https://github.com/Marmo77",
    featuredLabel: "WYRÓŻNIONY · NAJBARDZIEJ ZŁOŻONY PROJEKT",
    tagLabels: { LIVE: "ONLINE", "IN DEVELOPMENT": "W ROZWOJU" },
    items: [
      {
        slug: "car-service-dashboard",
        name: "Car Service Dashboard",
        tag: "IN DEVELOPMENT",
        featured: true,
        monogram: "CSD",
        homeBadges: ["Supabase", "PostgreSQL", "OAuth", "Next.js"],
        summary:
          "W pełni ręcznie napisany panel administracyjny w stylu SaaS dla serwisu samochodowego — CRUD pojazdów i rezerwacji, logowanie OAuth oparte na rolach oraz relacyjny model danych na Supabase Postgres. Mój dotychczas najbardziej zaawansowany projekt w obszarze logowania, logiki bazy danych i kontroli dostępu.",
        overview: [
          "Wszystko, co robiłem wcześniej, było mocno frontendowe: landing page, makieta, menu. To pierwszy projekt, w którym musiałem zaprojektować prawdziwy model danych — pojazdy, usługi, rezerwacje i konta pracowników — i zadbać, żeby interfejs, baza danych i warstwa logowania były ze sobą spójne.",
          "To panel CRUD w stylu SaaS dla serwisu samochodowego: pracownicy logują się, dodają i aktualizują pojazdy, zarządzają zleceniami serwisowymi i mają wszystko w jednym widoku administracyjnym. Wciąż jest w rozwoju, co celowo zostawiłem widoczne — to uczciwszy obraz pracy w toku niż projekt pokazany dopiero po ukończeniu.",
        ],
        keyFeatures: [
          {
            title: "Logowanie OAuth oparte na rolach",
            description: "konta pracowników i administratorów mają różne widoki i uprawnienia.",
          },
          {
            title: "Pełny CRUD pojazdów i rezerwacji",
            description:
              "oparty na relacyjnym schemacie Supabase Postgres, a nie tylko na stanie lokalnym.",
          },
          {
            title: "Relacyjny model danych",
            description:
              "usługi, pojazdy i rezerwacje poprawnie się do siebie odwołują, a ograniczenia pilnują spójności danych.",
          },
          {
            title: "Panel oparty na shadcn/ui",
            description:
              "tabele, okna dialogowe i formularze złożone z dostępnych komponentów bazowych, a nie z gotowego page-buildera.",
          },
          {
            title: "Walidacja przy każdym zapisie",
            description:
              "każda operacja zapisu sprawdza dane wejściowe, zanim trafią one do bazy.",
          },
        ],
        whatsNext:
          "Kończę jeszcze obsługę konfliktów rezerwacji i widoki raportowe. Gdy zestaw funkcji się ustabilizuje, to również pierwszy projekt, który zamierzam skonteneryzować — i mój główny powód, żeby nauczyć się Dockera.",
        techStack: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "OAuth",
          "shadcn/ui",
          "Tailwind CSS",
        ],
        repoUrl: "https://github.com/Marmo77/car_service_dashboard",
        detailTagline:
          "Ręcznie napisany panel administracyjny w stylu SaaS dla serwisu samochodowego — pełny CRUD pojazdów i rezerwacji, logowanie oparte na rolach i relacyjny schemat Postgres za każdym ekranem. To projekt z największą liczbą godzin, commitów i najtrudniejszych problemów, z jakimi musiałem się zmierzyć.",
        detailBadges: [
          { label: "W aktywnym rozwoju", variant: "amber" },
          { label: "Najbardziej złożony projekt", variant: "mint" },
        ],
        detailOverviewHeading: "Dlaczego ten projekt znaczy dla mnie najwięcej",
      },
      {
        slug: "ad-digital",
        name: "AD.digital",
        tag: "LIVE",
        monogram: "AD",
        thumbnail: "/screenshots/addigital.webp",
        gif: "/gifs/addigital.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Framer Motion"],
        summary:
          "Strona mojej własnej małej agencji webowej — zbudowana pod szybkość i konwersję, z galerią realizacji, animowanym hero i formularzem wyceny dla lokalnych firm.",
        overview: [
          "Prowadzę małą agencję webową i tworzę strony dla lokalnych firm w okolicach Goleniowa, Szczecina, Stargardu i Nowogardu. To jej własna witryna — musi ładować się szybko, czytelnie wyglądać na telefonie i zamienić wizytę w wiadomość w kilka sekund od wejścia.",
          "Pełni też rolę portfolio: sekcja „Realizacje” prowadzi do prawdziwych stron klientów, w tym makiety restauracji i strony serwisu samochodowego pokazanych również tutaj.",
        ],
        keyFeatures: [
          {
            title: "Animowane hero i system gradientów",
            description: "zbudowane na Framer Motion, dla płynnych i wydajnych przejść.",
          },
          {
            title: "Galeria portfolio / „Realizacje”",
            description:
              "pokazuje prawdziwe projekty klientów wraz z efektami (np. wzrost liczby rezerwacji i zapytań).",
          },
          {
            title: "Przełącznik motywu jasny / ciemny",
            description:
              "zapamiętywany w trakcie sesji, na poziomie oczekiwań klienta.",
          },
          {
            title: "Struktura przyjazna SEO",
            description:
              "semantyczny HTML i metadane nastawione na lokalne frazy wyszukiwania.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://addigital.vercel.app/",
        repoUrl: "https://github.com/Marmo77/AD-digital-website",
        detailTagline:
          "Strona mojej własnej małej agencji webowej — zaprojektowana i zbudowana tak, żeby zamieniać właścicieli lokalnych firm w klientów, a nie tylko dobrze wyglądać.",
        detailBadges: [{ label: "Online", variant: "mint" }],
        detailOverviewHeading: "Strona, która ma sprzedawać, nie tylko istnieć",
      },
      {
        slug: "restaurant-mockup",
        name: "Restaurant Mockup",
        tag: "LIVE",
        monogram: "RM",
        thumbnail: "/screenshots/bistroburger.webp",
        gif: "/gifs/bistroburger.gif",
        homeBadges: ["Vite", "Rezerwacje", "Responsywność"],
        summary:
          "Koncepcyjna strona burgerowni typu gastropub — prezentacja menu i ścieżka rezerwacji stolika, zaprojektowana tak, żeby była lokalna, apetyczna i prosta w rezerwacji.",
        overview: [
          "To był brief koncepcyjny: gastropub z rzemieślniczym piwem i autorskimi burgerami, potrzebujący strony równie ciepłej i konkretnej jak samo jedzenie, a nie generycznego szablonu restauracji.",
          "Projekt mocno stawia na duże zdjęcia, wyrazistą typografię menu i ścieżkę rezerwacji, która nigdy nie każe szukać, jak zarezerwować stolik.",
        ],
        keyFeatures: [
          {
            title: "Prezentacja menu",
            description:
              "podzielone na kategorie, oparte na zdjęciach sekcje menu, wygodne do szybkiego przeglądania na telefonie.",
          },
          {
            title: "Wyraźne CTA rezerwacji stolika",
            description:
              "stała, prosta ścieżka z każdej sekcji wprost do rezerwacji.",
          },
          {
            title: "Responsywny układ oparty na zdjęciach",
            description:
              "starannie kadrowane zdjęcia, które trzymają jakość od telefonu po desktop.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.burgerszczecin.pl/",
        repoUrl: "https://github.com/Marmo77/Restaurant-burger-website",
        detailTagline:
          "Koncepcyjna strona burgerowni typu gastropub — zbudowana wokół jednego zadania: sprawić, żeby ktoś zgłodniał na tyle, by zarezerwować stolik w niecałą minutę.",
        detailBadges: [{ label: "Online", variant: "mint" }],
        detailOverviewHeading: "Projektowanie pod apetyt, nie tylko pod układ",
      },
      {
        slug: "nordcar-service",
        name: "NordCar Service",
        tag: "LIVE",
        monogram: "NC",
        thumbnail: "/screenshots/nordcar.webp",
        gif: "/gifs/nordcar.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Strona firmowa"],
        summary:
          "Makieta strony firmowej serwisu samochodowego — lista usług, przyciski rezerwacji i czysty, budujący zaufanie układ dla lokalnych klientów.",
        overview: [
          "Klienci serwisów samochodowych chcą dwóch rzeczy od razu: dowodu, że warsztat jest kompetentny, i możliwości rezerwacji bez dzwonienia. Ta makieta opiera się na czytelnej liście usług, bezpośrednich przyciskach rezerwacji i układzie, który wygląda solidnie, a nie prowizorycznie — jako uzupełnienie panelu Car Service Dashboard.",
        ],
        keyFeatures: [
          {
            title: "Lista usług",
            description: "jasne ceny i zakres każdej usługi, bez ukrytych szczegółów.",
          },
          {
            title: "Przyciski rezerwacji",
            description:
              "powtarzane w naturalnych momentach decyzyjnych, a nie tylko w nagłówku.",
          },
          {
            title: "Układ budujący zaufanie",
            description:
              "czysta siatka, spójne odstępy i ton bliższy stronie firmowej niż szablonowi.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://nord-car.pl",
        repoUrl: "https://github.com/Marmo77/Carservice-website",
        detailTagline:
          "Makieta strony firmowej serwisu samochodowego — zbudowana tak, żeby warsztat online budził takie samo zaufanie, jak na miejscu.",
        detailBadges: [{ label: "Online", variant: "mint" }],
        detailOverviewHeading: "Zaufanie budowane układem",
      },
      {
        slug: "meblex",
        name: "Meblex",
        tag: "LIVE",
        monogram: "MX",
        thumbnail: "/screenshots/meblexszczecin.webp",
        gif: "/gifs/meblexszczecin.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Galeria realizacji"],
        summary:
          "Strona producenta mebli na wymiar ze Szczecina — wizualne portfolio realizacji z prostą ścieżką do zapytania o wycenę.",
        overview: [
          "Meblex tworzy meble na wymiar — kuchnie, szafy, zabudowy komercyjne — gdzie praca sama się broni, gdy tylko można ją zobaczyć. Zadaniem strony jest wyeksponować to rzemiosło i sprawić, żeby zapytanie o wycenę było banalnie proste.",
          "Strona opiera się na dużej galerii zdjęć gotowych realizacji, czytelnym podziale oferty i ścieżce kontaktu nastawionej na jedno: zamianę przeglądania w zapytanie.",
        ],
        keyFeatures: [
          {
            title: "Galeria realizacji",
            description:
              "oparta na zdjęciach prezentacja gotowych mebli — najsilniejsze narzędzie sprzedaży, jakie ma producent mebli.",
          },
          {
            title: "Prosta ścieżka do wyceny",
            description: "krótka droga z każdej sekcji do zapytania o zamówienie na wymiar.",
          },
          {
            title: "Podział na kategorie",
            description:
              "czytelne sekcje dla kuchni, szaf i realizacji komercyjnych, żeby odwiedzający szybko się odnaleźli.",
          },
          {
            title: "Responsywny układ oparty na zdjęciach",
            description:
              "zdjęcia w wysokiej rozdzielczości, które pozostają ostre i szybkie od telefonu po desktop.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.meblex-szczecin.pl/",
        repoUrl: "https://github.com/Marmo77/CustomFurnitures-website",
        detailTagline:
          "Strona producenta mebli na wymiar ze Szczecina — zbudowana tak, żeby rzemiosło broniło się samo, a zapytanie o wycenę było banalnie proste.",
        detailBadges: [{ label: "Online", variant: "mint" }],
        detailOverviewHeading: "Niech praca broni się sama",
      },
      {
        slug: "nova-ubezpieczenia",
        name: "Nova Ubezpieczenia",
        tag: "LIVE",
        monogram: "NU",
        thumbnail: "/screenshots/novaubezpieczenia.webp",
        gif: "/gifs/novaubezpieczenia.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Pozyskiwanie klientów"],
        summary:
          "Strona agencji ubezpieczeniowej — czytelna prezentacja rodzajów ubezpieczeń i budujący zaufanie układ, który zamienia odwiedzających w zapytania o ofertę.",
        overview: [
          "Ubezpieczenia to zakup oparty na zaufaniu: ludzie chcą wiedzieć, że mają do czynienia z kimś wiarygodnym, zanim zostawią swoje dane. Nova Ubezpieczenia potrzebowała strony, która wygląda solidnie i uspokajająco, a jednocześnie sprawia, że zapytanie o ofertę jest proste.",
          "Strona porządkuje ubezpieczenia w czytelne kategorie, trzyma przycisk kontaktu i wyceny w zasięgu na każdym etapie przewijania i zachowuje profesjonalny, spokojny ton zamiast nachalnej sprzedaży.",
        ],
        keyFeatures: [
          {
            title: "Kategorie ubezpieczeń",
            description:
              "rodzaje ubezpieczeń przedstawione jasno, żeby odwiedzający w kilka sekund znalazł to, co go dotyczy.",
          },
          {
            title: "Przycisk zapytania o ofertę",
            description:
              "stała, prosta ścieżka do formularza kontaktu i wyceny z dowolnego miejsca strony.",
          },
          {
            title: "Układ budujący zaufanie",
            description:
              "czysta struktura, spokojny ton i widoczne dane kontaktowe — sygnały wiarygodności, których szuka klient ubezpieczeniowy.",
          },
          {
            title: "W pełni responsywna",
            description:
              "czytelna na telefonie i na desktopie, z przyciskiem wyceny zawsze w zasięgu.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.nova-ubezpieczenia.pl/",
        repoUrl: "https://github.com/Marmo77/Insurance-company-website",
        detailTagline:
          "Strona agencji ubezpieczeniowej — zbudowana tak, żeby wyglądała wiarygodnie i uspokajająco, a jednocześnie sprawiała, że zapytanie o ofertę jest proste.",
        detailBadges: [{ label: "Online", variant: "mint" }],
        detailOverviewHeading: "Najpierw zaufanie, potem wycena",
      },
    ],
  },

  contact: {
    sectionLabel: "06 — Kontakt",
    heading: "Zbudujmy coś razem.",
    subheading:
      "Otwarty na staże, pracę na część etatu i każdą współpracę, która pozwoli mi dalej tworzyć realne projekty. Odpiszę w ciągu doby.",
    email: "aleksydobrodziej@gmail.com",
    form: {
      intro:
        "Masz projekt, staż albo po prostu chcesz się przywitać? Chętnie Cię wysłucham.",
      messagePlaceholder:
        "Napisz kilka słów o projekcie, roli lub okazji, którą masz na myśli...",
      consentLabel:
        "Zgadzam się na przetwarzanie moich danych w celu odpowiedzi na tę wiadomość, zgodnie z",
      privacyUrl: "/privacy",
      submitLabel: "Wyślij wiadomość",
      successNote:
        "Twój program pocztowy powinien otworzyć się za chwilę — pamiętaj, żeby tam też kliknąć „wyślij”.",
    },
    rows: [
      {
        icon: "mail",
        label: "Email",
        value: "aleksydobrodziej@gmail.com",
        href: "mailto:aleksydobrodziej@gmail.com",
      },
      {
        icon: "github",
        label: "GitHub",
        value: "github.com/Marmo77",
        href: "https://github.com/Marmo77",
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        value: "aleksydobrodziej",
        href: "https://www.linkedin.com/in/aleksydobrodziej/",
      },
      { icon: "location", label: "Lokalizacja", value: "Polska" },
      {
        icon: "open-to",
        label: "Otwarty na",
        value: "Staże i współpracę",
      },
    ],
  },

  footer: {
    copyright: "© 2026 Aleksy Dobrodziej.",
    builtWith: "Zbudowane w React · TypeScript · Tailwind CSS · shadcn/ui",
    builtBy: "Addigital",
    designedCreated: "Projekt i wykonanie:",
  },

  ui: {
    getInTouch: "Napisz do mnie",
    openMenu: "Otwórz menu",
    changeLanguage: "Zmień język",
    hero: {
      viewProjects: "Zobacz projekty",
      getInTouch: "Napisz do mnie",
    },
    heatmap: {
      contributions: "commitów w ostatnim roku",
      less: "Mniej",
      more: "Więcej",
    },
    projectCard: {
      details: "Zobacz szczegóły",
      liveDemo: "Zobacz stronę",
      source: "Kod źródłowy",
    },
    projectDetail: {
      back: "Wróć do wszystkich projektów",
      overview: "Przegląd",
      keyFeatures: "Kluczowe funkcje",
      whatsNext: "Co dalej",
      techStack: "Technologie",
      links: "Linki",
      openLiveDemo: "Otwórz stronę",
      viewSource: "Zobacz kod",
      viewSourceGithub: "Zobacz kod na GitHubie",
      liveDemo: "Zobacz stronę",
      sourceGithub: "Kod na GitHubie",
      previous: "Poprzedni",
      next: "Następny:",
      allProjects: "Wszystkie projekty",
      getInTouch: "Napisz do mnie",
    },
    contactForm: {
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      privacyPolicy: "Polityką prywatności",
      otherWays: "Inne sposoby kontaktu",
      errName: "Podaj swoje imię",
      errEmail: "Podaj poprawny adres e-mail",
      errMessage: "Napisz treść wiadomości",
      errConsent: "Zaakceptuj politykę prywatności, aby kontynuować",
      mailSubject: "Kontakt z portfolio od",
    },
    privacy: {
      label: "Prywatność",
      title: "Polityka prywatności",
      back: "Wróć do kontaktu",
      intro:
        "To prywatne portfolio, a nie firma, więc ta polityka jest z założenia krótka.",
      sections: [
        {
          heading: "Co jest zbierane",
          body: "Formularz kontaktowy prosi wyłącznie o imię, adres e-mail i wiadomość. Nic więcej nie jest śledzone, przechowywane ani zapisywane podczas korzystania z niego.",
        },
        {
          heading: "Jak są wykorzystywane",
          body: "Wysłanie formularza otwiera Twój własny program pocztowy z gotową wiadomością zaadresowaną do {email}. Wiadomość dociera do mnie dopiero wtedy, gdy sam ją wyślesz — po drodze nic nie trafia na żaden serwer ani do osób trzecich.",
        },
        {
          heading: "Bez udostępniania, bez spamu",
          body: "Twoje dane nigdy nie są sprzedawane, udostępniane ani dodawane do listy mailingowej. Służą wyłącznie do udzielenia Ci odpowiedzi.",
        },
      ],
      questionsHeading: "Pytania",
      questionsPrefix: "Napisz w każdej chwili na",
    },
    notFound: {
      code: "404",
      title: "Nie znaleziono strony",
      description:
        "Strona, której szukasz, nie istnieje lub została przeniesiona. Wróćmy na właściwą drogę.",
      home: "Wróć na stronę główną",
    },
  },
};
