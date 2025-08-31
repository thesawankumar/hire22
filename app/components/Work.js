"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import JobImage from "../images/job.png";
import Hiring from "../images/hiring.png";
import Recur from "../images/recruitment.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: 1,
        title: "Create a JobCoNCT",
        desc: "Post your job in a few simple steps, and let our AI agent, SARA, deliver interview-ready candidates within 22 hours.",
        img: JobImage,
    },
    {
        id: 2,
        title: "JoinX Score Profiles",
        desc: "JoinX Score isn't just about matching resumes. Our AI agent, SARA, intelligently analyses candidate CTC, location, and notice period to rank profiles that best fit your hiring criteria.",
        img: Hiring,
    },
    {
        id: 3,
        title: "Get Super Profiles",
        desc: "Review Super Profiles using the JoinX Score and move forward with interviews to secure the perfect match for your job.",
        img: Recur,
    },
];

export default function Work() {
    const stepsRef = useRef([]);
    const lineRef = useRef(null);

    useEffect(() => {
        // Animate steps with scale, rotation, and fade
        stepsRef.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    delay: i * 0.2,
                }
            );
        });

        // Animate the connecting line growing left to right
        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0, transformOrigin: "left center" },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-3xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    How Does It Work?
                </h2>

                {/* Timeline Steps */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            ref={(el) => (stepsRef.current[i] = el)}
                            className="flex flex-col items-center text-center max-w-xs"
                        >
                            {/* Icon Circle */}
                            <div className="w-30 h-30 mb-6 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center shadow-lg">
                                <Image
                                    src={step.img}
                                    alt={step.title}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>

                            {/* Title + Desc */}
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}

                    {/* Connecting Line */}
                    <div
                        ref={lineRef}
                        className="absolute hidden md:block top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 -z-10"
                    ></div>
                </div>
            </div>
        </section>
    );
}
