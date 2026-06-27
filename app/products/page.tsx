"use client";

import "./products.css";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import Navbar from "../../components/Navbar";

import ProductCard from "../../components/ProductCard";

import { getProducts } from "../../lib/api";

export default function ProductsPage() {

    const [search, setSearch] = useState("");

    const {

        data,

        isLoading,

        isError,

    } = useQuery({

        queryKey: ["products"],

        queryFn: () => getProducts(),

    });

    if (isLoading) {

        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

    }

    if (isError) {

        return <h2 style={{ textAlign: "center" }}>Something went wrong.</h2>;

    }

    // const filteredProducts = products.filter((product) =>

    //     product.name.toLowerCase().includes(search.toLowerCase())

    //     ||

    //     product.description.toLowerCase().includes(search.toLowerCase())

    // );
    const products = data?.products || [];

    return (

        <>

            <Navbar

                search={search}

                setSearch={setSearch}

            />

            <main className="products-page">

                <h1>

                    Discover Amazing Products

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

        </>

    );

}