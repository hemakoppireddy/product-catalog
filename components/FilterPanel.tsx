"use client";

import "./FilterPanel.css";

interface FilterPanelProps {
  category: string;
  setCategory: (value: string) => void;

  minPrice: string;
  setMinPrice: (value: string) => void;

  maxPrice: string;
  setMaxPrice: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function FilterPanel({
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
}: FilterPanelProps) {
  return (
    <aside className="filter-panel">

      <h2>Filters</h2>

      <div className="filter-group">

        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
        </select>

      </div>

      <div className="filter-group">

        <label>Minimum Price</label>

        <input
          type="number"
          placeholder="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

      </div>

      <div className="filter-group">

        <label>Maximum Price</label>

        <input
          type="number"
          placeholder="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>

      <div className="filter-group">

        <label>Sort</label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="price-asc">Price Low-High</option>
          <option value="price-desc">Price High-Low</option>
        </select>

      </div>

    </aside>
  );
}