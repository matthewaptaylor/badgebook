import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import mi from './locales/mi';

export const DEFAULT_NS = 'translation';

export const resources = {
  en: {
    [DEFAULT_NS]: en,
  },
  mi: {
    [DEFAULT_NS]: mi,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: [DEFAULT_NS],
  defaultNS: DEFAULT_NS,
  resources,
});

export default i18n;
