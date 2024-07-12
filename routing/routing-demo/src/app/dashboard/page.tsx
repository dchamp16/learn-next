import {formatDate} from "@/app/_lib/format-date";

function Barchart() {
    return <h1>Barchart me me me</h1>
}

export default function Dashboard() {
    console.log(formatDate('06/30/1990'))
    return (
        <>
            <h1>Dashboard</h1>
            <Barchart/>
        </>
    );
}