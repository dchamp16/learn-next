'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/app/pages/products/[productId]/products";

type Props = {
    params: {
        productId: string;
    }
}

export default function Products({ params }: Props) {
    const pathname = usePathname();
    console.log(pathname + '/1');

    return (
        <>
            <nav className={'flex flex-col'}>
                {products.map((p) => (
                    <Link
                        key={`${p.name}${p.id}`}
                        className={'m-3 bg-neutral-400 hover:bg-neutral-200'}
                        href={`${pathname}/${p.id}`}
                    >
                        {p.name}
                    </Link>
                ))}
            </nav>
        </>
    );
}
