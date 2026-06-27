import { NextResponse } from "next/server";
import { products } from "@/lib/mock-products";

export async function GET() {
  return NextResponse.json(products);
}