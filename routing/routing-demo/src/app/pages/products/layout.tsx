export const metadata = {
    title: 'Product page',
}

export default function ProductLayout ({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Product List</h1>
            {children}
        </>
    )
}