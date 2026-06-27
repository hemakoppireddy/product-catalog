# Dynamic Product Catalog

A modern and responsive Product Catalog web application built using Next.js, TypeScript, React Query, and CSS. The application allows users to browse products, search, filter, sort, paginate through product listings, and view detailed information for individual products.

---

# Project Description

This project demonstrates a dynamic product catalog similar to an e-commerce platform. It uses Next.js API Routes as a mock backend and React Query for efficient client-side data fetching and caching.

---

# Technologies Used

- Next.js
- React
- TypeScript
- React Query (@tanstack/react-query)
- CSS
- Next.js API Routes
- Docker
- Docker Compose

---

# Features

- Product Listing
- Product Details Page
- Search Products
- Filter by Category
- Filter by Price Range
- Sort by Name
- Sort by Price
- Pagination
- Loading State
- Error Handling
- Responsive Design
- Mock REST API
- React Query Caching
- TypeScript Support

---

# Folder Structure

```
app/
├── api/
│   └── products/
│       ├── route.ts
│       └── [id]/
│           └── route.ts
│
├── products/
│   ├── page.tsx
│   └── [id]/
│       ├── page.tsx
│       └── product-details.css
│
components/
├── Navbar
├── ProductCard
├── FilterPanel
├── Pagination
└── LoadingSpinner

hooks/
└── useDebounce.ts

lib/
├── api.ts
├── mock-products.ts
├── constants.ts
└── types.ts
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd product-catalog
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000/products
```

---

# Docker Setup

Build and start the application

```bash
docker-compose up --build
```

The application will be available at

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` file

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

An example environment file is included as

```
.env.example
```

---

# API Endpoints

## Get Products

```
GET /api/products
```

### Query Parameters

| Parameter | Description |
|----------|-------------|
| q | Search products |
| category | Filter by category |
| minPrice | Minimum price |
| maxPrice | Maximum price |
| sortBy | name or price |
| sortOrder | asc or desc |
| page | Current page |
| limit | Products per page |

---

## Get Product Details

```
GET /api/products/:id
```

Example Response

```json
{
  "id": "1",
  "name": "Laptop Pro",
  "description": "High performance laptop",
  "price": 1200,
  "category": "electronics",
  "imageUrl": "..."
}
```

---

# Implemented Features

- Dynamic product listing
- Product details page
- Search functionality
- Category filtering
- Price filtering
- Product sorting
- Pagination
- Loading spinner
- Error handling
- Responsive layout
- Mock REST API
- React Query integration

---

# Running the Application

Development

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Start Production Server

```bash
npm start
```

---

# Testing

Testing libraries have been prepared for future implementation.

Run tests

```bash
npm test
```

---

# Architecture Decisions

## Why Next.js?

- File-based routing
- API Routes
- Better performance
- Production-ready framework

## Why React Query?

- Efficient API caching
- Automatic refetching
- Loading and error state management

## Why TypeScript?

- Static type checking
- Improved maintainability
- Better developer experience

---

# Challenges Faced

- Managing multiple filters together
- Handling client-side pagination
- Designing reusable components
- Integrating React Query with mock APIs
- Building a responsive user interface

---

# Future Improvements

- User authentication
- Shopping cart
- Wishlist
- Dark mode
- Product reviews
- Backend database integration
- Image gallery
- Payment integration



