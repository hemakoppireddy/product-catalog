import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro",
    description: "High performance laptop suitable for programming and gaming.",
    price: 1200,
    category: "electronics",
    imageUrl: "https://picsum.photos/id/180/400/300",
  },
  {
    id: "2",
    name: "Wireless Mouse",
    description: "Comfortable wireless mouse with long battery life.",
    price: 30,
    category: "electronics",
    imageUrl: "https://picsum.photos/id/1080/400/300",
  },
  {
    id: "3",
    name: "Programming Book",
    description: "Learn modern web development with practical examples.",
    price: 45,
    category: "books",
    imageUrl: "https://picsum.photos/id/24/400/300",
  },
  {
    id: "4",
    name: "Office Chair",
    description: "Comfortable chair for long working hours.",
    price: 180,
    category: "furniture",
    imageUrl: "https://picsum.photos/id/1062/400/300",
  },
  {
    id: "5",
    name: "Cotton T-Shirt",
    description: "Soft cotton t-shirt available in multiple colors.",
    price: 20,
    category: "clothing",
    imageUrl: "https://picsum.photos/id/21/400/300",
  },
];