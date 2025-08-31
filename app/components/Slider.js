"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coolova from "../images/coolova.png";
import Airbnb from "../images/airbnb.png";
import Wipro from "../images/wipro.png";
import Vmware from "../images/vmware.png";
import Oracle from "../images/oracle.png";
import Cisco from "../images/cisco.png";

const clients = [
    { id: 1, logo: Coolova, alt: "Coolova" },
    { id: 2, logo: Airbnb, alt: "Airbnb" },
    { id: 3, logo: Wipro, alt: "Wipro" },
    { id: 4, logo: Vmware, alt: "VMware" },
    { id: 5, logo: Oracle, alt: "Oracle" },
    { id: 6, logo: Cisco, alt: "Cisco" },
];

const ClientSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // slower slide
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="py-12 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Happy Clients
            </h2>
            <Slider {...settings}>
                {clients.map((client, index) => (
                    <motion.div
                        key={client.id}
                        className="flex justify-center items-center"
                        whileHover={{ scale: 1.0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={client.logo.src}
                            alt={client.alt}
                            className="h-16 object-contain"
                        />
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientSlider;
