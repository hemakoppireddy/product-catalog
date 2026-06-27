"use client";

import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";

import { Product } from "../../lib/types";

import { getProducts } from "../../lib/api";

import "./products.css";

export default function ProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProducts() {

            try {

                const data = await getProducts();

                setProducts(data);

            }

            catch (error) {

                console.log(error);

            }

            finally {

                setLoading(false);

            }

        }

        fetchProducts();

    }, []);

    if (loading) {

        return <h1>Loading...</h1>;

    }

    return (

        <main className="products-page">

            <h1>

                Product Catalog

            </h1>

            <div className="products-grid">

                {

                    products.map((product) => (

                        <ProductCard

                            key={product.id}

                            product={product}

                        />

                    ))

                }

            </div>

        </main>

    );

}