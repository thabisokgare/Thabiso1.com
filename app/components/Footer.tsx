"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full py-8 mt-16 bg-zinc-900">
            <div className="max-w-4xl mx-auto px-4">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-300 transition duration-300"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-300 transition duration-300"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright Notice */}
                <div className="mt-6 text-center text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Thabiso Kgare. All rights reserved.
                </div>

                {/* Back to Top Button */}
                <div className="mt-6 text-center">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center mx-auto px-4 py-2 text-sm text-zinc-400 hover:text-zinc-300 transition duration-300"
                    >
                        <FaArrowUp className="w-4 h-4 mr-2" />
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;