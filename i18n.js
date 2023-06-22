import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Replace this with your own translation files
import translationDE from './public/locales/de/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      de: {
        translation: translationDE,
      },
    },
    lng: "de", 
    fallbackLng: "de",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;