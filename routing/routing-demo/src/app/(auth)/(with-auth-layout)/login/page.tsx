import Link from "next/link";

export default function Login() {
    return(
        <>
            <form action=""
                  className="flex items-center justify-center gap-4">
                {/* Username Input */}
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="username"
                           className="text-sm text-gray-600">
                        Username
                    </label>
                </div>

                {/* Password Input */}
                <div className="flex flex-col">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="password"
                           className="text-sm text-gray-600">
                        Password
                    </label>
                </div>

                {/* Submit and Register Buttons */}
                <div className="flex space-x-2">
                    <button type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                        Submit
                    </button>
                    <Link href={'/register'}>Register</Link>
                </div>
            </form>
        </>
    )

}