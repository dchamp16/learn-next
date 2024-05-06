import React from 'react';
import Link from "next/link";

function Setting(props) {
    const generic = {
        title: String,
        description:  String,
        link-title: String
    }

    generic = {
        title: "Setting",
            description:  "this is from the Setting page",
        link-title: "setting login",
    }

    return (
        <>
            <h1>{generic.title}</h1>
            <p>{generic.description}</p>
            <Link href="/login"></Link>
        </>

    );
}

export default Setting;