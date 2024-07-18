import Link from "next/link";

export default function Header() {
    return (
        <header
            style={{
                backgroundColor: "lightblue",
                padding: "1rem"
            }}
        >
            <Link
                href={'/Dashboard'}>Dashboard</Link>
            <Link href={'/blog'}>Blog</Link>
            

        </header>
    )
}