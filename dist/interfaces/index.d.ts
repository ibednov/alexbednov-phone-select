export type Language = 'ru' | 'en' | 'az' | 'be';
export interface Country {
    country_code: string;
    phone_code: number;
    name?: string;
    phone_ranges?: number[];
}
export interface Translations {
    [key: string]: {
        countries: {
            [key: string]: string;
        };
    };
}
export type { Country as CountryType };
