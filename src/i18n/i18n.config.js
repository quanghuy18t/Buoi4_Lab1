import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import vi from './translations/vi.json';
import jp from './translations/jp.json'

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
  jp: {
    translation: jp,
  }
};

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapValue: false,
    },
    resources,
  });
}

export default i18next;