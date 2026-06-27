import Link from "next/link";

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

        <main
            style={{
                width: "90%",
                maxWidth: "1100px",
                margin: "50px auto",
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >

            <img

                src={product.imageUrl}

                alt={product.name}

                style={{
                    width: "450px",
                    borderRadius: "20px",
                }}

            />

            <div>

                <span
                    style={{
                        background: "#DBEAFE",
                        padding: "8px 15px",
                        borderRadius: "30px",
                    }}
                >

                    {product.category}

                </span>

                <h1
                    style={{
                        marginTop: "20px",
                    }}
                >

                    {product.name}

                </h1>

                <h2
                    style={{
                        color: "#16A34A",
                    }}
                >

                    ₹ {product.price}

                </h2>

                <p
                    style={{
                        marginTop: "20px",
                        lineHeight: "1.8",
                        color: "#475569",
                    }}
                >

                    {product.description}

                </p>

                <Link href="/products">

                    <button
                        style={{
                            marginTop: "30px",
                            padding: "12px 20px",
                            border: "none",
                            background: "#2563EB",
                            color: "white",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >

                        ← Back to Products

                    </button>

                </Link>

            </div>

        </main>

    );

}