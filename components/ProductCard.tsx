import "./ProductCard.css";
import Link from "next/link";
import { Product } from "../lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  return (

    <div className="product-card">

      <div className="image-box">

        <img
          loading="lazy"
          src={product.imageUrl}
          alt={product.name}
        />

      </div>

      <div className="product-content">

        <span className="category">

          {product.category.toUpperCase()}

        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className="price-row">

          <h3>₹ {product.price}</h3>

        </div>

        <Link href={`/products/${product.id}`}>

          <button className="details-btn"
          aria-label={`View details of ${product.name}`}>

            View Details →

          </button>

        </Link>

      </div>

    </div>

  );

}