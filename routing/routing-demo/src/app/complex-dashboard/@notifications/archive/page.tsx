import Card from "@/app/components/Card";
import Link from "next/link";

export default function ArchivedNotification() {
    return (
        <Card>
            <div>Archived Notification</div>
            <Link className={'text-amber-700 hover:text-amber-500'} href="/complex-dashboard">Default</Link>
        </Card>
    )
}