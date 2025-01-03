import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    
    <footer className="bg-gray-100 dark:bg-transparent text-gray-800 dark:text-gray-200 py-8 px-6 dark:border-t-[1px] dark:border-gray-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hurry up! Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>

            
            <li>
              <Link href="/blogsAll" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>

        </div>
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">HMMS Blog</h2>
          <p className="mt-4 text-sm">
            Sharing ideas, insights, and stories to inspire and connect with
            readers around the world.
          </p>
        </div>

       

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: mubashirkhi72@gmail.com</li>
            <li>Phone: +92 325 3570 380</li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
        <p>© 2025 Mubashir Saeedi Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
