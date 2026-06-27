"use client";

import "./products.css";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import FilterPanel from "../../components/FilterPanel";
import Pagination from "../../components/Pagination";

import useProductFilters from "../../hooks/useProductFilters";

import { getProducts } from "../../lib/api";

export default function ProductsPage() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");

    const [minPrice, setMinPrice] = useState("");

    const [maxPrice, setMaxPrice] = useState("");

    const [sortBy, setSortBy] = useState("");

    const [page, setPage] = useState(1);

    const { updateFilter } = useProductFilters();

    useEffect(() => {

        updateFilter("q", search);

    }, [search]);

    useEffect(() => {

        updateFilter("category", category);

        setPage(1);

    }, [category]);

    useEffect(() => {

        updateFilter("minPrice", minPrice);

        setPage(1);

    }, [minPrice]);

    useEffect(() => {

        updateFilter("maxPrice", maxPrice);

        setPage(1);

    }, [maxPrice]);

    useEffect(() => {

        updateFilter("sortBy", sortBy);

    }, [sortBy]);

    useEffect(() => {

        updateFilter("page", page.toString());

    }, [page]);

    let sortField = "";
    let sortOrder = "";

    if (sortBy === "price-asc") {

        sortField = "price";
        sortOrder = "asc";

    }

    if (sortBy === "price-desc") {

        sortField = "price";
        sortOrder = "desc";

    }

    if (sortBy === "name-asc") {

        sortField = "name";
        sortOrder = "asc";

    }

    if (sortBy === "name-desc") {

        sortField = "name";
        sortOrder = "desc";

    }

    const {

        data,

        isLoading,

        isError,

    } = useQuery({

        queryKey: [

            "products",

            search,

            category,

            minPrice,

            maxPrice,

            sortBy,

            page,

        ],

        queryFn: () =>

            getProducts({

                q: search,

                category,

                minPrice: minPrice ? Number(minPrice) : undefined,

                maxPrice: maxPrice ? Number(maxPrice) : undefined,

                sortBy: sortField,

                sortOrder,

                page,

                limit: 10,

            }),

    });

    if (isLoading) {

        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

    }

    if (isError) {

        return <h2 style={{ textAlign: "center" }}>Something went wrong.</h2>;

    }

    const products = data?.products || [];

    const totalPages = data?.totalPages || 1;

    return (

        <>

            <Navbar

                search={search}

                setSearch={setSearch}

            />

            <main className="products-page">

                <h1>Discover Amazing Products</h1>

                <div className="content">

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

                    <div className="products-section">

                        <div className="products-grid">

                            {

                                products.length > 0 ?

                                    products.map((product) => (

                                        <ProductCard

                                            key={product.id}

                                            product={product}

                                        />

                                    ))

                                    :

                                    <h2>No Products Found</h2>

                            }

                        </div>

                        <Pagination

                            currentPage={page}

                            totalPages={totalPages}

                            setPage={setPage}

                        />

                    </div>

                </div>

            </main>

        </>

    );

}