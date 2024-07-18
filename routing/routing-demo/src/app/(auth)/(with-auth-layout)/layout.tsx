export default function AuthLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h1>AuthLayout</h1>;
        </>
    )
}