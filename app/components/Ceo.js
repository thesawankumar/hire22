"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CEOImage from "../images/ceo.png";

const CEO = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
            {/* Background Gradient Circles */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                {/* Text Section */}
                <motion.div
                    className="flex-1 bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold justify-center items-center mb-4 text-gray-800">
                        Talk to our CEO
                    </h2>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                        The Perfect Hiring Story
                    </h3>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        Need help finding top talent with <span className="font-semibold">Hire22.ai</span>? Want to discuss the future of leadership hiring?
                    </p>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        I'm Joby, a startup enthusiast with <span className="font-bold">15 years</span> in HR Tech. I founded <span className="font-semibold">Freshersworld.com</span>, serving <span className="font-bold">30,000+ companies</span> with 15 million user signups and an app with 1.5 million downloads. Now, I'm excited to introduce <span className="font-semibold">Hire22.ai</span>, a game-changer in top-level recruitment.
                    </p>
                    <p className="mb-6 text-gray-600 leading-relaxed">
                        Let's discuss your hiring challenges! I'm confident Hire22.ai can help you find the perfect fit for your team.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
                    >
                        CONNECT NOW
                    </motion.button>

                    <p className="mt-6 font-medium text-gray-800">
                        Joby Joseph <br />
                        Founder & CEO, Hire22.ai
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="flex-1 relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                        <Image
                            src={CEOImage}
                            alt="CEO Image"
                            width={500}
                            height={500}
                            priority
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CEO;
