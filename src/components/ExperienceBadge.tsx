"use client";

import { motion } from "framer-motion";

export default function ExperienceBadge() {
  return (
    <div className="relative w-[160px] h-[160px] flex items-center justify-center">
      {/* Rotating Circular Text */}
      <motion.svg
        aria-hidden
        role="img"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text fill="#ff0000" fontSize="16" letterSpacing="3px" fontWeight="500">
          <textPath  className="text-2xl text-purple-600" href="#circlePath" startOffset="0%">
            • YEARS OF EXPERIENCE • PROFESSIONAL •
          </textPath>
        </text>
      </motion.svg>

      {/* Center Number */}
      <div className="relative z-10 text-center">
        <p className="text-4xl font-extrabold text-lime-400">2+</p>
        <p className="text-xl text-white tracking-wider">Years</p>
      </div>
    </div>
  );
}
