export class Product {
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: string[];
    color: string[];
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    image_url: string;
    slug: string;
    discount?: number;
  }