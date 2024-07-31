'use client'

import React from 'react'
import {useRouter} from "next/navigation";

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        alert('Order placed');

        setTimeout(() => {
            router.push('/');
        }, 2000)
    };

    return (
        <>
            <h1>Order Product</h1>
            <button className={'bg-green-700 rounded p-2 hover:bg-green-400 transition delay-150 duration-300 ease-in-ou'} onClick={handleClick}>Place order</button>
        </>
    );
}