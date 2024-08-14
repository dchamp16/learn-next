import Link from "next/link";

export default function F1() {
    return(
        <>
            <h1>F1 page</h1>
            <div>
                <Link className='font-bold hover:text-blue-400 transition delay-150 duration-300 ease-in-out' href={'f1/f2'}>Go to F2</Link>
            </div>
        </>
    )
}