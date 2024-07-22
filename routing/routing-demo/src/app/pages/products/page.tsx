// 'use client'
import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId}`,
    };
};

import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/app/pages/products/[productId]/products";

export default function Products({ params }: Props) {
    const pathname = usePathname();
    console.log(pathname + '/1');

    return (
        <>
            <nav className={'flex flex-col'}>
                {products.map((p) => {
                    return (
                        <Link
                            key={`${p.name}${p.id}`}
                            className={'m-3 bg-neutral-400 hover:bg-neutral-200'}
                            href={`${pathname}/${p.id}`}
                        >
                            Product {p.id}
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
