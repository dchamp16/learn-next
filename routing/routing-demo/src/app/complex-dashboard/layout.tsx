export default function Layout({
                                   children,
                                   users,
                                   revenue,
                                   notifications
                               }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div className="flex flex-wrap">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">{notifications}</div>
            </div>
        </>
    );
}
