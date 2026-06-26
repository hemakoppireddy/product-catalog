// Product Interface
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

// Query Parameters
export interface ProductQueryParams {
  q?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "name" | "price";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

// API Response
export interface ProductsResponse {
  products: Product[];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
}