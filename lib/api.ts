import { ProductsResponse } from "./types";

interface QueryParams {

  q?: string;

  category?: string;

  minPrice?: number;

  maxPrice?: number;

  sortBy?: string;

  sortOrder?: string;

  page?: number;

  limit?: number;

}

export async function getProducts(params: QueryParams = {}) {

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {

    if (value !== undefined && value !== "") {

      searchParams.append(key, String(value));

    }

  });

  const response = await fetch(

    `/api/products?${searchParams.toString()}`

  );

  if (!response.ok) {

    throw new Error("Failed to fetch products");

  }

  const data: ProductsResponse = await response.json();

  return data;

}