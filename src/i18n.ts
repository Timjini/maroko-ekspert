import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our Travel Agency!",
      button_book: "Book Now",
      description: "Explore Morocco with the best tours from Poland.",
      hero: {
        title: "Discover Authentic Moroccan Tours",
        description: "Maroko Ekspert offers professional tours, excursions, and authentic activities in Morocco. Now in Polish!",
        button: "Explore Tours"
      },
      nav: {
        services: "Services",
        tours: "Tours",
        about: "About",
      },
      solution:{
        title:"Our Solutions"
      },
      solutions: [
        {
          title: "Polish-speaking Tour Guides",
          description: "Led by El Ouafi, a professional in the field, ensuring a knowledgeable and engaging experience.",
          image: "/path/to/solution1.jpg",
        },
        {
          title: "Unique and Authentic Tours",
          description: "Immerse yourself in real Moroccan culture and cuisine with our carefully curated tours.",
          image: "/path/to/solution1.jpg",
        },
        {
          title: "E-Guide Solutions",
          description: "Stay connected with live communication and activity progress tracking through our mobile app.",
          image: "/path/to/solution1.jpg",
        },
      ],
      services: [
        {
          title: "Guided Tours",
          description: "Expert-led, tailored tours across Morocco with a focus on Polish-speaking guides.",
        },
        {
          title: "Cultural Experiences",
          description: "Immerse yourself in authentic Moroccan culture, from food to local traditions.",
        },
        {
          title: "Mobile App Guide",
          description: "Stay connected with your guide in real-time through our mobile app, enhancing your experience.",
        },
      ],
      service:{
        title:"Our Services"
      },
      cities : [
        {
          name: 'EXCURSIONS AGADIR',
          description: "Discover Agadir, Morocco's vibrant excursions. From ancient cities to desert adventures, explore unforgettable landscapes.",
          image: 'https://maroko-ekspert.pl/wp-content/uploads/2024/05/Agadir-Taghazoute-scaled.jpg',
        },
        {
          name: 'EXCURSIONS MARRAKECH',
          description: "Experience Marrakech's magic with our excursions. From historic sites to vibrant markets, explore the heart of Morocco.",
          image: 'https://maroko-ekspert.pl/wp-content/uploads/2024/05/AdobeStock_176119828-min-scaled.jpeg',
        },
        {
          name: 'NEW ADVENTURES',
          description: 'Experience adventure with our unique packages: horseback and camel rides, a fantasy dinner night, and desert trips. Thrills and unforgettable memories await!',
          image: 'https://maroko-ekspert.pl/wp-content/uploads/2024/05/essaouiar2.jpeg',
        },
      ],
      city:{
        title: "Moroccan Cities"
      },
      about: {
        title: "About Us",
        description: "<strong>Maroko Ekspert</strong> is led by <strong>El Ouafi</strong>, a seasoned professional with over 15 years of experience in travel and tourism between Morocco and Poland. With a deep understanding of both cultures, El Ouafi specializes in creating authentic and memorable travel experiences. His expertise ensures that each tour is carefully crafted to showcase the best of Moroccan heritage, cuisine, and hospitality.",
        information: "Information",
        address: {
          label: "Address:",
          value: "N°15, 4éme Etage, Imm. Inflass, Bd Abderrahim Bouabid,<br/> Agadir 80000, Morocco"
        },
        email: {
          label: "Email:",
          value: "biuro@maroko-ekspert.pl"
        },
        phone: {
          label: "Phone:",
          values: ["+48 725 648 880", "+212 669 035 305"]
        },
        contact_button: "Contact Us"
      },
    },
  },
  pl: {
    translation: {
      welcome: "Witamy w naszej agencji turystycznej!",
      button_book: "Zarezerwuj teraz",
      description: "Odkrywaj Maroko dzięki najlepszym wycieczkom z Polski.",
      hero: {
        title: "Odkryj autentyczne wycieczki po Maroku",
        description: "Maroko Ekspert oferuje profesjonalne wycieczki, wyprawy i autentyczne atrakcje w Maroku. Teraz po polsku!",
        button: "Odkryj wycieczki"
      },
      nav: {
        services: "Usługi",
        tours: "Wycieczki",
        about: "O nas",
      },
      solution:{
        title:"Nasze rozwiązania"
      },
      solutions: [
        {
          title: "Polskojęzyczni przewodnicy",
          description: "Prowadzeni przez El Ouafi, profesjonalistę w branży, zapewniają rzetelne i angażujące doświadczenie.",
          image: "/path/to/solution1.jpg",
        },
        {
          title: "Unikalne i autentyczne wycieczki",
          description: "Zanurz się w prawdziwej marokańskiej kulturze i kuchni dzięki naszym starannie dobranym wycieczkom.",
          image: "/path/to/solution1.jpg",
        },
        {
          title: "Rozwiązania E-Guide",
          description: "Pozostań w kontakcie dzięki komunikacji na żywo i śledzeniu postępów aktywności w naszej aplikacji mobilnej.",
          image: "/path/to/solution1.jpg",
        },
      ],
      services: [
        {
          title: "Wycieczki z przewodnikiem",
          description: "Eksperckie, dostosowane wycieczki po Maroku z przewodnikami mówiącymi po polsku.",
        },
        {
          title: "Doświadczenia kulturowe",
          description: "Zanurz się w autentycznej kulturze Maroka, od jedzenia po lokalne tradycje.",
        },
        {
          title: "Przewodnik w aplikacji mobilnej",
          description: "Pozostań w kontakcie z przewodnikiem w czasie rzeczywistym dzięki naszej aplikacji mobilnej.",
        },
      ],
      service:{
        title:"Nasze usługi"
      },
      cities: [
        {
          name: "Wycieczki z Agadiru",
          description: "Odkryj Agadir, tętniące życiem wycieczki po Maroku. Od starożytnych miast po pustynne przygody – odkrywaj niezapomniane krajobrazy.",
          image: "https://maroko-ekspert.pl/wp-content/uploads/2024/05/Agadir-Taghazoute-scaled.jpg",
        },
        {
          name: "Wycieczki z Marakeszu",
          description: "Poczuj magię Marrakeszu podczas naszych wycieczek. Od zabytków po tętniące życiem rynki – odkryj serce Maroka.",
          image: "https://maroko-ekspert.pl/wp-content/uploads/2024/05/AdobeStock_176119828-min-scaled.jpeg",
        },
        {
          name: "ATRAKCJE",
          description: "Przeżyj wyjątkowe przygody dzięki naszym unikatowym pakietom: przejażdżki konne i na wielbłądach, fantastyczna kolacja i wycieczki po pustyni. Dreszczyk emocji i niezapomniane wspomnienia czekają!",
          image: "https://maroko-ekspert.pl/wp-content/uploads/2024/05/essaouiar2.jpeg",
        },
      ],
      city:{
        title: "Miasta marokańskie"
      },
      about: {
        title: "O nas",
        description: "<strong>Maroko Ekspert</strong> jest prowadzony przez <strong>El Ouafi</strong>, doświadczonego profesjonalistę z ponad 15-letnim doświadczeniem w podróżach i turystyce między Marokiem a Polską. Dzięki dogłębnej znajomości obu kultur El Ouafi specjalizuje się w tworzeniu autentycznych i niezapomnianych wrażeń z podróży. Jego ekspertyza gwarantuje, że każda wycieczka jest starannie przygotowana, aby zaprezentować najlepsze aspekty marokańskiego dziedzictwa, kuchni i gościnności.",
        information: "Informacje",
        address: {
          label: "Adres:",
          value: "N°15, 4éme Etage, Imm. Inflass, Bd Abderrahim Bouabid,<br/> Agadir 80000, Maroko"
        },
        email: {
          label: "E-mail:",
          value: "biuro@maroko-ekspert.pl"
        },
        phone: {
          label: "Telefon:",
          values: ["+48 725 648 880", "+212 669 035 305"]
        },
        contact_button: "Skontaktuj się z nami"
      },
    },
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });
export default i18n;
