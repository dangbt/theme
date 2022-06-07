import vnVN from './vn';
import enUS from './en';

export interface I18N {
  home: {
    intro: {
      title: string;
      title1: string;
      title2: string;
      title3: string;
      para: string;
      button: string;
    };
    aboutUs: {
      button: {
        aboutUs: string;
        learnMore: string;
      };
      title: string;
      title1: string;
      title2: string;
    };
    feature: {
      button: {
        feature: string;
      };
      title: string;
      title1: string;
      title2: string;
      title3: string;
      para1: string;
      para2: string;
      para3: string;
    };
    countion: {
      client: string;
      project: string;
      country: string;
      years: string;
    };
  };
}

export enum Language {
  'vn' = 'vn',
  'en' = 'en',
}
const i18n: Record<Language, I18N> = {
  vn: vnVN,
  en: enUS,
};
export default i18n;
