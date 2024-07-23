import { generateMetadata } from "@/app/pages/products/[productId]/metadata";
export { generateMetadata };


export default function ProductDetails({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    );
}
