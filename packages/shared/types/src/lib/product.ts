export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  downloads: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  sortBy?: 'popular' | 'recent' | 'price_asc' | 'price_desc';
}