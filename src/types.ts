export interface Product {
    id: number;
    taste: string;
    features: string[];
    weightKilograms: string;
    description: string;
    slogan?: string;
    brand?: string;
    backgroundUrl?: string;
    disabled?: boolean;
}