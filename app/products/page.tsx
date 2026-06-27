"use client";

import "./products.css";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import Navbar from "../../components/Navbar";

import ProductCard from "../../components/ProductCard";
import FilterPanel from "../../components/FilterPanel";

import { getProducts } from "../../lib/api";

export default function ProductsPage() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const [minPrice, setMinPrice] = useState("");

    const [maxPrice, setMaxPrice] = useState("");

    const [sortBy, setSortBy] = useState("");

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
                <div className="content">

                    <h1>

                        Discover Amazing Products

                    </h1>
                    <FilterPanel

                        category={category}
                        setCategory={setCategory}

                        minPrice={minPrice}
                        setMinPrice={setMinPrice}

                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}

                        sortBy={sortBy}
                        setSortBy={setSortBy}

                    />

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
                </div>
            </main >

        </>

    );

}