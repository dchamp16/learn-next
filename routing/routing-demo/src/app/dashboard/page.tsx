import {formatDate} from "@/app/_lib/format-date";
import Link from "next/link";


export default function Dashboard() {
    console.log(formatDate('06/30/1990'))
    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
            <nav
                className="flex items-center justify-center space-x-4 bg-gray-200 py-4 rounded-md">
                <Link href={'/login'}
                      class="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium rounded-md">login</Link>
                <Link href={'/register'}
                      class="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium rounded-md">register</Link>
            </nav>

        </>
    );
}