import { Metadata } from "next";
import { products } from "./products";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    const productId = parseInt(params.productId); // Convert productId to integer
    const product = products.find(p => p.id === productId); // Find the product with the matching ID

    if (!product) {
        return { title: 'Product Not Found' }; // Return a default title if the product is not found
    }

     {
        title: `Product ${product.name}` // Return the product name as the title
    };
};
