import type { Language } from '@/interfaces';
export declare const useI18n: () => {
    currentLang: import("vue").Ref<Language, Language>;
    setLanguage: (lang: Language | undefined) => void;
    t: (key: string) => any;
};
