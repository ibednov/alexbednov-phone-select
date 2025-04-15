import type { Language, Country } from '@/interfaces';
export declare const usePhoneNumber: (lang: Language, favoritesCountries?: string[], hideFavorites?: boolean) => {
    searchQuery: import("vue").Ref<string, string>;
    selectedCountry: import("vue").Ref<{
        country_code: string;
        phone_code: number;
        name?: string | undefined;
        phone_ranges?: number[] | undefined;
    } | null, Country | {
        country_code: string;
        phone_code: number;
        name?: string | undefined;
        phone_ranges?: number[] | undefined;
    } | null>;
    inputValue: import("vue").Ref<string, string>;
    favorites: import("vue").ComputedRef<({
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges?: undefined;
    } | {
        name: string;
        country_code: string;
        phone_code: number;
        phone_ranges: number[];
    } | undefined)[]>;
    filteredCountries: import("vue").ComputedRef<Country[]>;
    parsePhoneNumber: (value: string) => void;
    handleSearch: (value: string) => void;
};
