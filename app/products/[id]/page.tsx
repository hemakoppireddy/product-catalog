import Link from "next/link";
import "./product-details.css";

interface Product {

    id: string;

    name: string;

    description: string;

    price: number;

    category: string;

    imageUrl: string;

}

async function getProduct(id: string) {

    const response = await fetch(

        `http://localhost:3000/api/products/${id}`,

        {

            cache: "no-store",

        }

    );

    if (!response.ok) {

        return null;

    }

    return response.json();

}

export default async function ProductDetailsPage({

    params,

}: {

    params: Promise<{ id: string }>;

}) {

    const { id } = await params;

    const product: Product | null = await getProduct(id);

    if (!product) {

        return (

            <h1
                style={{
                    textAlign: "center",
                    marginTop: "100px",
                }}
            >

                Product Not Found

            </h1>

        );

    }

    return (

        <main className="details-container">

            <img className="details-image"

                src={product.imageUrl}

                alt={product.name}

                

            />

            <div>

                <span className="details-category"
                    
                >

                    {product.category}

                </span>

                <h1 className="details-title"
                    
                >

                    {product.name}

                </h1>

                <h2 className="details-price"
                   
                >

                    ₹ {product.price}

                </h2>

                <p className="details-description"
                    
                >

                    {product.description}

                </p>

                <Link href="/products">

                    <button className="back-btn"
                    >

                        ← Back to Products

                    </button>

                </Link>

            </div>

        </main>

    );

}