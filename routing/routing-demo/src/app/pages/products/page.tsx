'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {products} from "@/app/pages/products/[productId]/products";


export default function Products() {
    console.log(usePathname() + '/1')
    return (
        <>
            <nav
                className={'flex flex-col'}>
                {products.map(p => {
                    return <Link
                        key={`${p.name}${p.id}`}
                        className={'m-3 bg-neutral-400 hover:bg-neutral-200'}
                        href={`${usePathname()}/${p.id}`}>Product {p.id}</Link>
                })}
            </nav>
        </>

    )
}