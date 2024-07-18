export default function NotFound({params}: {
    params: string
}) {
    return (
        <>
            <div
                className="container mx-auto flex flex-col items-center justify-center h-screen">
                <h2 className="text-3xl font-bold mb-4">Page
                    not found</h2>
                <p className="text-lg">This page
                    could not be found</p>
            </div>

        </>
    )
}