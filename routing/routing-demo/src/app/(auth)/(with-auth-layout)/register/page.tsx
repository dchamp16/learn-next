'use client'

import { useState } from 'react';

export default function Register() {
    const [inputValue, setInputValue] = useState('test');

    return (
        <>
            <h1 className="h-auto">Register</h1>
            <div className="container m-2 flex justify-start items-center">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                />
                <p className="ml-4">{inputValue}</p>
            </div>
        </>
    );
}
