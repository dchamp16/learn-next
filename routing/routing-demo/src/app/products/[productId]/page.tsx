export default function ProductDetail({params}: {
    params: string
}) {

    return (
        <>
            <h1>Details about
                product {params.productId}</h1>
        </>
    )

}