"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { ModeToggle } from "../theme/theme-button";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* Navbar Light */}
      <div className="w-full px-4 sm:px-8 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex space-x-2">
            <Image
              src={`/images/icon.png`}
              alt={"icon"}
              width={36}
              height={36}
            />
            <Link href={"/"}>
              <h3 className="text-2xl text-[#252B42] dark:text-white hover:text-pink-600 ">
                HMMS
                <span
                  className={`${montserrat.className} dark:text-white text-[#252B42] pl-2 text-2xl  hover:text-pink-800`}
                >
                  Blog
                </span>
              </h3>
            </Link>
          </div>
          {/* Icons for Small Screens */}
          <div className="flex items-center md:hidden gap-4">
            <ModeToggle />

            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? <MdClose size={24} /> : <CiMenuFries size={24} />}
            </button>
          </div>

          {/* Navbar Links */}
          <ul className="hidden md:flex items-center space-x-2 md:space-x-2 lg:space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Blog", link: "/blogsAll" },
              { name: "About", link: "/about" },
              { name: "Contact", link: "/contact" },
            ].map((navbar) => (
              <li key={navbar.link} className="relative">
                <Link
                  href={navbar.link}
                  className={`${montserrat.className} font-bold text-md  dark:text-white text-[#252B42]  hover:text-pink-600 `}
                >
                  {navbar.name}
                </Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        </div>
      </div>
      {/* Links for Small Screens */}
      {menuOpen && (
        <div className="flex flex-col mt-4 md:hidden text-center space-y-2">
          {[
            { name: "Home", link: "/" },
            { name: "Blog", link: "/blogsAll" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
          ].map((navbar) => (
            <Link href={navbar.link} key={navbar.name} onClick={closeMenu}>
              <span
                className={`${montserrat.className} font-bold text-sm dark:text-white text-[#252B42] hover:text-pink-900`}
              >
                {navbar.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
