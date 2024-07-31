export default function Loading() {

    console.log('hello loading')
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">

            <div className="loader">Loading...</div>
        </div>
    );
}
