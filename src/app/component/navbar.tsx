"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(true); // Close menu function

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (

//  <header className="mb-8 h-[65px] bg-transparent  caret-transparent dark:border-b-[1px] border-gray-600 flex items-center justify-center">
   

    <div
      className={`w-full ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}  backdrop-blur-md shadow-md sticky top-0 z-50 `}
    >
      <div className="w-full px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3 items-center">
            <Image
              src={"/images/icon.png"}
              alt="Meta Blog Logo"
              width={36}
              height={36}
            />
            <h3 className="text-3xl hover:text-blue-500">
              HMMS <span className={montserrat.className}>Blog</span>
            </h3>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="md:hidden relative inline-flex items-center justify-between w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors"
          >
            <span
              className={`transform ${
                theme === "light" ? "translate-x-0" : "translate-x-6"
              } inline-block w-6 h-6 bg-white rounded-full shadow-md transition-transform`}
            />
            {theme === "light" ? (
              <SunIcon className="absolute left-1 mx-auto w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="absolute right-1 mx-auto w-5 h-5 text-gray-700" />
            )}
          </button>
          <ul className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Blog", link: "/blogsAll" },
              { name: "About", link: "/about" },
              { name: "Contact", link: "/contact" },
            ].map((nav, idx) => (
              <li key={idx}>
                <Link
                  href={`${nav.link}`}
                  className={`${montserrat.className} font-bold text-sm hover:text-blue-500`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Switcher on Large Screen */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`px-4 py-2 border rounded-lg text-sm ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-black"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.56-5.42a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </span>
            </div>

            {/* Dark/Light Mode Toggle Switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="relative inline-flex items-center justify-between w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors"
            >
              <span
                className={`transform ${
                  theme === "light" ? "translate-x-0" : "translate-x-6"
                } inline-block w-6 h-6 bg-white rounded-full shadow-md transition-transform`}
              />
              {theme === "light" ? (
                <SunIcon className="absolute left-1 mx-auto w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="absolute right-1 mx-auto w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {menuOpen ? (
                <IoClose className="w-6 h-6 text-black" />
              ) : (
                <CiMenuFries className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Small screen menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu} // Close the menu when clicking outside
          >
            <div
              className="absolute top-0 right-0 bg-white dark:bg-gray-900 w-3/4 h-full p-4 z-50 flex flex-col"
              onClick={(e) => e.stopPropagation()} // Prevent menu close when clicking inside
            >
              {/* Navigation Links */}
              {[
                { name: "Home", link: "/" },
                { name: "Blog", link: "/blogsAll" },
                { name: "About", link: "/about" },
                { name: "Contact", link: "/contact" },
              ].map((nav, idx) => (
                <Link
                  href={`/${nav.link}`}
                  key={idx}
                  className="block py-2 text-lg font-bold hover:text-blue-500"
                >
                  {nav.name}
                </Link>
              ))}

              {/* Search Input */}
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 border rounded-lg text-sm ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m1.56-5.42a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
