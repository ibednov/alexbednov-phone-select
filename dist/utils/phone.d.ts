import { type Country } from '@/utils/countries';
export declare function findCountryByCode(code: string, countries: Country[]): Country | null;
export declare function extractPhoneCode(value: string): {
    code: string;
    number: string;
};
