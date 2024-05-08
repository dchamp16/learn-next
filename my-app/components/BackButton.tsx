import React from 'react';
import {useRouter} from "next/router";

function BackButton(props) {
    const router = useRouter();

    function handleBack(): void{
        router.back()
    }

    return (
        <button onClick={handleBack}>Back</button>
    );
}

export default BackButton;