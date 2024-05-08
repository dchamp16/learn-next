import "./global.css"
import Link from "next/link";

export default function Page() {
    return(
        <>
            <h1>Hello, Next.js!</h1>
            <p className="text-red-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptas.</p>
            <Link href='/settings/setting'>Test</Link>
        </>
    )
}