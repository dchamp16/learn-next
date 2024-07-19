'use client'

import {useRouter} from "next/navigation";



export default function AuthLayout({children}: {
    children: React.ReactNode
}) {

    const router = useRouter();
    return (
        <>
            <button onClick={router.back}>back</button>
            {children}
        </>
    )
}