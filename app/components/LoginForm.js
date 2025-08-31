'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function EmployerLogin() {
    const loginBox = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (loginBox.current) {
            gsap.fromTo(
                loginBox.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen  from-blue-100 to-white">
            <div
                ref={loginBox}
                className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl"
            >
                <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">
                    Employer Login
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                <div className="mb-4 relative">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                        Password *
                    </label>
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Must be at least 6 characters"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                </div>

                <div className="text-right mb-6">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition">
                    Login
                </button>

                <div className="text-center text-sm mt-6">
                    <p>
                        Not a member?{' '}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Create an employer account
                        </Link>
                    </p>
                    <p className="mt-1">
                        If you are Jobseeker?{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Login Here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
