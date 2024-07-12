import {products} from './products';

export default function ProductDetail({params}: {
    params: string
}) {

    const product = products.find(p => p.id === parseInt(params.productId));

    if (!product) {
        return <h1>Product
            not found</h1>
    }

    return (
        <>
            <h1>Details about
                product {params.productId}</h1>

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </>
    )

}