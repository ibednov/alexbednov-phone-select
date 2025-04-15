import type { Language, CountryType } from '@/interfaces';
export type Country = CountryType;
export declare const useCountries: (lang?: Language) => {
    getCountries: import("vue").ComputedRef<({
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges?: undefined;
    } | {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges: number[];
    })[]>;
    getCountryByCode: (code: string) => {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges?: undefined;
    } | {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges: number[];
    } | undefined;
    getCountryByName: (name: string) => {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges?: undefined;
    } | {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges: number[];
    } | undefined;
    getCountryByPhoneCode: (phoneCode: number) => {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges?: undefined;
    } | {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges: number[];
    } | undefined;
    getFlagPath: (countryCode: string) => string;
    getAllCountryNames: (countryCode: string) => string[];
};
