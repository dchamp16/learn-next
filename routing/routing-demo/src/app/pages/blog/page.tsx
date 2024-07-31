'use client'
import { useRouter } from 'next/navigation';

export default function Blog() {
    const router = useRouter();

    return (
        <>
            <h1>Blog</h1>
            <ul className="list-disc list-inside">
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
