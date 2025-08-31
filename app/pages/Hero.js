"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 py-10 md:py-12 text-center">
            <div className="max-w-3xl mx-auto px-6">
                {/* Top Small Heading */}
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-600 font-semibold text-sm md:text-xl mb-4 tracking-wide"
                >
                    India’s First
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug"
                >
                    <span className="mr-2">AI-Powered</span>
                    <motion.span
                        className="inline-block"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                            Instant JobCoNCT
                        </span>
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-4 text-lg md:text-xl text-gray-700"
                >
                    Platform for <span className="font-semibold">Mid & Senior-Level Hiring</span>
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed"
                >
                    Get Confirmed{" "}
                    <span className="text-pink-600 font-medium">Interview-Ready</span> Candidates
                    in just <span className="text-red-500 font-bold">22 Hours</span>. <br />
                    Create a JobCoNCT, and get access to AI-Scored Candidates!
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-300"
                    >
                        Register & CoNCT Instantly
                    </motion.button>
                </motion.div>
            </div>

            {/* Background Accent Circles */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50"
            />
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10 right-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-40"
            />
        </section>
    );
};

export default Hero;
