import Link from "next/link";

export default function F4() {
    return (
        <>
        <h1>F4 page</h1>
            <div>
                <Link href={'f3'}>Go to f3</Link>
            </div>
            <Link href={'/about'}>About</Link>
        </>
    )
}