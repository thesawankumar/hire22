"use client"
import React, { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log({ name, email, password });
        // Call your registration API here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow-md w-80 flex flex-col gap-4"
        >
            <h2 className="text-2xl font-bold text-center">Register</h2>

            <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded"
                required
            />

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

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 rounded"
                required
            />

            <button
                type="submit"
                className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
                Register
            </button>
        </form>
    );
}
