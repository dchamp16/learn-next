'use client'
import { useRouter } from 'next/navigation';
import {useState} from "react";

export default function Blog() {
    const router = useRouter();
    const [randomNum , setRandomNum] = useState(0);

    const getRandomNum = () : any => {
        const num : number = Math.floor(Math.random() * 10);
        setRandomNum(num);
    }

    // if(getRandomNum === 3) {
    //     throw new Error('error loading review')
    // }

    if(randomNum === 3) {
        console.log('random random num');
    }


    return (
        <>
            <h1>Blog</h1>
            <button className={'p-2 border-2 hover:bg-amber-100'} onClick={getRandomNum}>getRandomNum</button>
            <ul className="list-disc list-inside">
                <p>{randomNum}</p>
                <li
                    className="cursor-pointer text-blue-500 hover:underline"
                    onClick={() => router.push('pages/blog/first')}
                >
                    First
                </li>
                <li
                    className="cursor-pointer text-blue-500 hover:underline"
                    onClick={() => {
                        router.push('pages/blog/second');
                    }}
                >
                    Second
                </li>
            </ul>
        </>
    )
}
