"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaGithub />, href: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername" },
    { icon: <FaFacebook />, href: "https://facebook.com/yourusername" },
    { icon: <FaEnvelope />, href: "mailto:youremail@example.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050505] border-t border-purple-700/10">
      {/* Animated gradient line on top */}
      <motion.div
        className="absolute top-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />

      {/* Footer main content */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
        {/* Brand / Name */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center md:text-left"
        >
          <h2 className="text-lg md:text-xl font-semibold text-white tracking-wide">
            Shakhawat Islam
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Full Stack Developer | Building Modern Web Experiences
          </p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {["About", "Projects", "Skills", "Contact"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-white/5 hover:bg-purple-600/40 text-white transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-purple-400 font-medium">Shakhawat Islam</span>. All rights reserved.
      </div>

      {/* Floating subtle glow animation */}
      <motion.div
        className="absolute -bottom-40 left-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-3xl rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
