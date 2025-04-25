export interface Pub {
    id?: number;
    name: string;
    image?: any;  
    description?: string;
    url?: string;
    language?: 'fr' | 'ar' | 'en';
    state: boolean;
    is_primary: boolean;
    is_secondary: boolean;
}