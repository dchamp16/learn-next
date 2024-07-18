export default function ProductDetails({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Product List</h1>
            {children}
        </>
    );
}
