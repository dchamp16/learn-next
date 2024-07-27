export default function DashboardLayout ({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
            {children}
        </>
    )
}
