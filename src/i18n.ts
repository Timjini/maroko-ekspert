// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our Travel Agency!",
      button_book: "Book Now",
      description: "Explore Morocco with the best tours from Poland."
    },
  },
  pl: {
    translation: {
      welcome: "Witamy w naszej agencji turystycznej!",
      button_book: "Zarezerwuj teraz",
      description: "Odkrywaj Maroko dzięki najlepszym wycieczkom z Polski."
    },
  },
};

const section = {
    en: {
        translation: {
          welcome: "Welcome to our Travel Agency!",
          button_book: "Book Now",
          description: "Explore Morocco with the best tours from Poland."
        },
      },
      pl: {
        translation: {
          welcome: "Witamy w naszej agencji turystycznej!",
          button_book: "Zarezerwuj teraz",
          description: "Odkrywaj Maroko dzięki najlepszym wycieczkom z Polski."
        },
      },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
