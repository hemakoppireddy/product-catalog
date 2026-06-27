import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main className="home">

      <div className="hero">

        <h1>Product Catalog</h1>

        <p>
          Discover amazing products with advanced search,
          filtering and sorting.
        </p>

        <Link href="/products">
          <button className="explore-btn">
            Explore Products
          </button>
        </Link>

      </div>

    </main>
  );
}