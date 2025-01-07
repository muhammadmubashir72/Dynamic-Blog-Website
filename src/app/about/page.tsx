"use client";

import React from "react";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const About = () => {
  return (
    <div className="relative  py-20 text-gray-900">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            width={500}
            height={500}
            src="/images/About Me.png" // Replace with your image path
            alt="About Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2
            className={`text-4xl font-bold mb-4 ${montserrat.className} hover:text-pink-600  text-amber-700 dark:text-white`}
          >
            About Us
          </h2>
          <p
            className={`text-lg mb-6 text-gray-700 dark:text-white hover:text-pink-600  ${roboto.className}`}
          >
            We are a passionate team committed to providing the best content and
            solutions for our users. Our goal is to create meaningful
            experiences that empower individuals and organizations to grow and
            succeed.
          </p>
          <p
            className={`text-lg text-gray-700 dark:text-white hover:text-pink-600  ${roboto.className}`}
          >
            With years of experience in the industry, we strive to innovate and
            stay ahead of the curve, offering cutting-edge services and products
            that make a difference.
          </p>
        </div>
      </div>

      {/* Additional About Section */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center px-6">
        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2
            className={`${montserrat.className} text-4xl font-bold mb-4  hover:text-pink-600  text-amber-700  dark:text-white `}
          >
            Our Mission
          </h2>
          <p
            className={` ${montserrat.className} text-lg mb-6 text-gray-700  hover:text-pink-600  dark:text-white`}
          >
            Our mission is to provide accessible, innovative, and high-quality
            solutions that drive success for businesses and individuals alike.
          </p>
          <p
            className={` ${montserrat.className} text-lg text-gray-700 hover:text-pink-600  dark:text-white  `}
          >
            We aim to make a positive impact in the industry, fostering
            long-term relationships and ensuring customer satisfaction.
          </p>
        </div>
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            width={400}
            height={300}
            src="/images/vision.gif" 
            alt="About Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
