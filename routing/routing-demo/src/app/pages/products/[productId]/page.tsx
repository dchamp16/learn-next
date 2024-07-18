'use client'

import {products} from './products';
import {useRouter} from "next/navigation";

export default function ProductDetail({params}: {
    params: { productId: string }
}) {

    const router = useRouter();

    const product = products.find(p => p.id === parseInt(params.productId));

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
            <button
                className={'bg-sky-500 hover:bg-sky-700'}
                onClick={() => router.back()}>
                Click here to go back
            </button>
            <h1 className={'mt-1 text-2xl'}>Details
                about
                product {params.productId}</h1>

            <h3 className={'m-3 text-xl'}>{product.name}</h3>
            <p className={'m-3'}>{product.description}</p>
            <p className={'m-3'}>${product.price}</p>
            <p className={'m-3'}>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </>
    );
}
