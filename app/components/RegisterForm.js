'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        mobile: ''
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://dummyapi.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Response:', data);
            alert('Registration successful! Check console for response.');
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-full px-6 py-12 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-md bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8 md:p-10"
            >
                <h2 className="text-3xl font-bold text-indigo-700 text-center mb-2">Register</h2>
                <p className="text-gray-600 text-center mb-8">Quick registration for your company</p>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Company Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="peer w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
                            required
                        />
                        <BusinessIcon className="absolute top-3 left-3 text-gray-400" />
                    </div>

                    {/* Contact Person Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="contactPerson"
                            placeholder="Contact Person Name"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            className="peer w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
                            required
                        />
                        <PersonIcon className="absolute top-3 left-3 text-gray-400" />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
                            required
                        />
                        <EmailIcon className="absolute top-3 left-3 text-gray-400" />
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="peer w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
                            required
                        />
                        <PhoneIcon className="absolute top-3 left-3 text-gray-400" />
                    </div>

                    {/* Register Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className={`w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-600 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </motion.button>

                    {/* Login Link */}
                    <div className="text-center text-sm mt-4">
                        <p>
                            Already registered?{' '}
                            <Link href="/login" className="text-blue-600 hover:underline">Login here</Link>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default RegisterForm;
