"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faq from "../images/Faq.png";
import Image from "next/image";

const faqData = [
    {
        question: "What is CoNCT work?",
        answer: "CoNCT is a smart networking system that connects employers with candidates efficiently..."
    },
    {
        question: "How does Job CoNCT work?",
        answer:
            "Once you send a Job CoNCT request, the candidate will receive an invitation. Upon confirmation, you gain access to their contact details and can move forward with the interview process."
    },
    {
        question: "Why Job CoNCT?",
        answer: "Job CoNCT allows for seamless connections between employers and potential hires..."
    },
    {
        question: "What is SARA AI?",
        answer: "SARA AI is an intelligent assistant designed to streamline recruitment and candidate engagement..."
    },
    {
        question: "What is Super Profile?",
        answer: "Super Profile is an enhanced candidate profile showcasing skills, experience, and achievements for better hiring decisions..."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-10">A Detail Employer FAQ About Hire22</h2>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Illustration */}
                <motion.div
                    className="flex-1 hidden md:flex justify-center items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={Faq} alt="FAQ Illustration" className="w-80" />
                </motion.div>

                {/* FAQ Items */}
                <div className="flex-1 space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white shadow-lg rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
                            >
                                {item.question}
                                <span className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-45" : "rotate-0"}`}>
                                    +
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="px-6 pb-4 text-gray-700"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
