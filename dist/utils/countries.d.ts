import type { Language, CountryType } from '@/interfaces';
export type Country = CountryType;
export declare const getCountries: (lang?: Language) => Country[];
export declare const getCountryByCode: (code: string, lang?: Language) => Country | undefined;
export declare const getCountryByName: (name: string, lang?: Language) => Country | undefined;
export declare const getCountryByPhoneCode: (phoneCode: number, lang?: Language) => Country | undefined;
export declare const getFlagPath: (countryCode: string) => string;
