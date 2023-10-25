import { resources, DEFAULT_NS } from '@/lib/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: (typeof resources)['en'];
  }
}
