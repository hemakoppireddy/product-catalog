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
  function clearFilters() {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
  }

  return (
    <aside className="filter-panel">

      <h2>Filters</h2>

      <div className="filter-group">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          aria-label="Category Filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="minPrice">Minimum Price</label>

        <input
          id="minPrice"
          aria-label="Minimum Price"
          type="number"
          placeholder="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="maxPrice">Maximum Price</label>

        <input
          id="maxPrice"
          aria-label="Maximum Price"
          type="number"
          placeholder="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="sort">Sort By</label>

        <select
          id="sort"
          aria-label="Sort Products"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price Low → High</option>
          <option value="price-desc">Price High → Low</option>
        </select>
      </div>

      <button
        className="clear-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>

    </aside>
  );
}