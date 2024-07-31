'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const isActive = (href : string) => pathname === href;

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-around">
                <Link href="/dashboard">
                    <span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/dashboard') ? 'font-bold' : ''}`}>
                        Dashboard
                    </span>
                </Link>
                <Link href="/blog">
                    <span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/blog') ? 'font-bold' : ''}`}>
                        Blog
                    </span>
                </Link>
                <Link href="/products">
                    <span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/products') ? 'font-bold' : ''}`}>
                        Products
                    </span>
                </Link>
            </div>
        </nav>
    );
}
