import "./ProductCard.css";
import Link from "next/link";
import { Product } from "../lib/types";

interface ProductCardProps {

    product: Product;

}

export default function ProductCard({

    product,

}: ProductCardProps) {

    return (

        <div className="product-card">

            <img
                src={product.imageUrl}
                alt={product.name}
            />

            <div className="product-content">

                <span className="category">

                    {product.category}

                </span>

                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <h3>

                    ₹{product.price}

                </h3>

                <Link href={`/products/${product.id}`}>

                    <button>

                        View Details

                    </button>

                </Link>

            </div>

        </div>

    );

}