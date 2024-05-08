import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";

interface Generic {
    title: string;
    description: string;
    linkTitle: string;
    linkLocation: string;
}

const Setting: React.FC = () => {
    const router = useRouter();
    const generic: Generic = {
        title: "Setting",
        description: "This is from the Setting page",
        linkTitle: "Setting Login",
        linkLocation: "/settings/login/login-setting",
    };

    return (
        <>
            <h1>{generic.title}</h1>
            <p>{generic.description}</p>
            <Link href={generic.linkLocation}>{generic.linkTitle}</Link>
            <BackButton/>
        </>
    );
}

export default Setting;