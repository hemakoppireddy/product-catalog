"use client";

import "./Navbar.css";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function Navbar({
  search,
  setSearch,
}: NavbarProps) {
  return (
    <header className="navbar">

      <div className="logo">

        <FaShoppingBag />

        <h2>Product Catalog</h2>

      </div>

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

    </header>
  );
}