import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/mock-products";

export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams;

  const q = searchParams.get("q") || "";

  const category = searchParams.get("category") || "";

  const minPrice = Number(searchParams.get("minPrice")) || 0;

  const maxPrice = Number(searchParams.get("maxPrice")) || Number.MAX_VALUE;

  const sortBy = searchParams.get("sortBy") || "";

  const sortOrder = searchParams.get("sortOrder") || "asc";

  const page = Number(searchParams.get("page")) || 1;

  const limit = Number(searchParams.get("limit")) || 10;

  let filteredProducts = [...products];

  // Search
  if (q) {

    filteredProducts = filteredProducts.filter((product) =>

      product.name.toLowerCase().includes(q.toLowerCase()) ||

      product.description.toLowerCase().includes(q.toLowerCase())

    );

  }

  // Category
  if (category) {

    filteredProducts = filteredProducts.filter(

      (product) => product.category === category

    );

  }

  // Price

  filteredProducts = filteredProducts.filter(

    (product) =>

      product.price >= minPrice &&

      product.price <= maxPrice

  );

  // Sorting

  if (sortBy === "price") {

    filteredProducts.sort((a, b) =>

      sortOrder === "asc"

        ? a.price - b.price

        : b.price - a.price

    );

  }

  if (sortBy === "name") {

    filteredProducts.sort((a, b) =>

      sortOrder === "asc"

        ? a.name.localeCompare(b.name)

        : b.name.localeCompare(a.name)

    );

  }

  const totalProducts = filteredProducts.length;

  const totalPages = Math.ceil(totalProducts / limit);

  const start = (page - 1) * limit;

  const end = start + limit;

  const paginatedProducts = filteredProducts.slice(start, end);

  return NextResponse.json({

    products: paginatedProducts,

    totalProducts,

    currentPage: page,

    totalPages,

  });

}