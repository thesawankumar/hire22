"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import TalentImg from "../images/talent.png";
import AIImg from "../images/ai.png";
import FastImg from "../images/fast.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Interview Ready Talent",
    desc: "Connect with interview-ready candidates, ensuring you engage with professionals who are ready and available for interviews.",
    img: TalentImg,
  },
  {
    id: 2,
    title: "AI Ranked Candidates",
    desc: "SARA AI ranks candidates based on JoinX Score by job description, analyzing skills and role alignment, ensuring top AI-scored talent stands out.",
    img: AIImg,
  },
  {
    id: 3,
    title: "Hire in 22 Hours",
    desc: "Get the perfect match for your Mid & Senior roles in just 22 hours. Fast, efficient, and hassle-free hiring starts here.",
    img: FastImg,
  },
];

export default function Hire() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const handleHover = (index, enter) => {
    const card = cardRefs.current[index];
    if (enter) {
      gsap.to(card, { scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", duration: 0.3 });
    } else {
      gsap.to(card, { scale: 1, y: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.08)", duration: 0.3 });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Hire22.ai?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => handleHover(i, true)}
              onMouseLeave={() => handleHover(i, false)}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg cursor-pointer transition-all"
            >
              <div className="w-28 h-28 mb-6 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center shadow-md">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
