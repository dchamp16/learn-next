import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-gray-800 p-4">
            <div
                className="container mx-auto flex justify-around">
                <Link href="/Dashboard">
                    <span
                        className="text-white hover:text-gray-300 cursor-pointer">Dashboard</span>
                </Link>
                <Link href="/blog">
                    <span
                        className="text-white hover:text-gray-300 cursor-pointer">Blog</span>
                </Link>
                <Link href="/contact">
                    <span
                        className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
                </Link>
                <Link href="/products">
                    <span
                        className="text-white hover:text-gray-300 cursor-pointer">Products</span>
                </Link>
            </div>
        </nav>
    )
}