import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HOME_EN from '../locales/en/home.json'
import ABOUT_EN from '../locales/en/about.json'
import HOME_VI from '../locales/vi/home.json'
import ABOUT_VI from '../locales/vi/about.json'
// Tạo các bản dịch
export const resources = {
  en: {
    home: HOME_EN,
    about: ABOUT_EN
  },
  vi: {
    home: HOME_VI,
    about: ABOUT_VI
  },
} as const;

export const defaultNS = 'about'

// Khởi tạo i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi", // Ngôn ngữ mặc định
    ns: ['home', 'about'],
    fallbackLng: "vi",
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
