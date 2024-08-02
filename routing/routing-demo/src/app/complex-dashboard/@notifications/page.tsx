import Card from "@/app/components/Card";
import Link from "next/link";


export default function Notification() {
    return (
        <Card>
            <div>Notification</div>
            <Link className={'text-amber-700 hover:text-amber-500'} href="/complex-dashboard/archive">Archived</Link>
        </Card>
    )
}