"use client";

import React from "react";
import { Montserrat, Roboto } from "next/font/google";
import { Mail, Phone, MapPin } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const Contact = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20 bg-white text-white"
      style={{
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact.webp')",
          opacity: 0.5, 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center px-6">
        <h2
          className={`text-3xl lg:text-5xl font-bold mb-4 hover:text-pink-600   ${montserrat.className} text-[#252B42]`}
        >
          Get in Touch
        </h2>
        <p
          className={`text-lg mb-8 font-bold hover:text-pink-600   text-[#252B42] ${roboto.className}`}
        >
          We’d love to hear from you. Reach out for inquiries, feedback, or just
          to say hello!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 ">
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8 text-[#252B42]" />
            <span
              className={`${roboto.className} text-[#252B42] hover:text-pink-600   font-bold lg::text-lg`}
            >
              email@example.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8  text-[#252B42]" />
            <span
              className={`${roboto.className} text-[#252B42]  hover:text-pink-600  font-bold lg:text-lg`}
            >
              +1 (123) 456-7890
            </span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-[#252B42]" />
            <span
              className={`${roboto.className} text-[#252B42] hover:text-pink-600   font-bold lg:text-lg`}
            >
              123 Blog Street, Web City
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 max-w-2xl mx-auto text-[#252B42]">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-6 py-3 rounded-md text-[#252B42] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${roboto.className}`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full px-6 py-3 rounded-md text-[#252B42] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${roboto.className}`}
          />
          <textarea
            placeholder="Your Message"
            className={`w-full px-6 py-3 rounded-md text-[#252B42] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-40 resize-none ${roboto.className}`}
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 rounded-md bg-yellow-400 hover:text-pink-600   text-[#252B42] font-bold hover:bg-yellow-500 transition duration-300 ${montserrat.className}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
