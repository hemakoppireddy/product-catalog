import { Product } from "../lib/types";

interface ProductCardProps{

    product:Product;

}

export default function ProductCard({

    product,

}:ProductCardProps){

    return(

        <div>

            Product Card

        </div>

    );

}