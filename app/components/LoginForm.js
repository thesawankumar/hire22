"use client"
import React, { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        // Call your API here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow-md w-80 flex flex-col gap-4"
        >
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 rounded">
                Login
            </button>
        </form>
    );
}
