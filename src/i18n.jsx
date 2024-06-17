import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationES from "./locales/fr/translation.json";
import translationEN from "./locales/en/translation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
        fr: {
            translation: translationES,
        },
        en: {
            translation: translationEN,
        },
        },
            lng: "",
            fallbackLng: "en",
            interpolation: {
            escapeValue: false,
        },
    }
);

export default i18n;
