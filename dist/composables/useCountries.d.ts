import { type MaybeRef } from 'vue';
import type { Language } from '@/interfaces';
export declare const useCountries: (lang?: Language, onlyCountries?: MaybeRef<string[] | undefined>) => {
    getCountries: import("vue").ComputedRef<import("@/interfaces").Country[]>;
    getCountryByCode: (code: string) => import("@/interfaces").Country | undefined;
    getCountryByName: (name: string) => import("@/interfaces").Country | undefined;
    getCountryByPhoneCode: (phoneCode: number) => import("@/interfaces").Country | undefined;
    getFlagPath: (countryCode: string) => string;
    getAllCountryNames: (countryCode: string) => string[];
};
