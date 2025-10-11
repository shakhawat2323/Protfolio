"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiPrisma, SiPostgresql, SiTypescript } from "react-icons/si";
import { RetroGrid } from "./ui/retro-grid";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { Typewriter } from "react-simple-typewriter";
// import SplashCursor from "./nurui/splash-cursor";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Meteors } from "./ui/meteors";
import Link from "next/link";


export default function HeroSection() {
  return (
     <div>
      
       <BackgroundBeamsWithCollision className="relative flex flex-col items-center justify-center h-[600px] overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black text-white">
           

          

      {/* Background Grid */}
          <RetroGrid
          className="absolute inset-0 opacity-25"
          speed={3}        
          cellSize={70}

        />


        {/* <SplashCursor /> */}
       <Meteors number={50} />

         {/* Infinite Rotating React Logo */}
  

         
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 w-full max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-slate-300"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mt-2 bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent uppercase"
          >
            Shakhawat Islam
          </motion.h1>

          {/* Typewriter */}
          <h2 className="text-2xl md:text-3xl font-bold text-lime-400 mt-3">
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          {/* Social Links */}
         <div className="flex gap-5 mt-6 justify-center md:justify-start ">
      {/* GitHub */}
      <Link    href="https://github.com/shakhawat2323" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener no referrer"
          className="group z-50 "
        >
          <FaGithub className="text-3xl text-slate-300 cursor-pointer   transition-transform duration-300 hover:scale-125 hover:text-lime-400 hover:drop-shadow-[0_0_10px_#84cc16]" />
        </a>
      </Link>

      {/* LinkedIn */}
      <Link    href="https://linkedin.com/in/mdshakhawatislam23" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group z-50"
        >
          <FaLinkedin className="text-3xl text-slate-300 transition-transform duration-300 hover:scale-125 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#60a5fa]" />
        </a>
      </Link>

      {/* Facebook */}
      <Link href="https://facebook.com/shakhawat0226" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group z-50"
        >
          <FaFacebook className="text-3xl text-slate-300 transition-transform duration-300 hover:scale-125 hover:text-blue-500 hover:drop-shadow-[0_0_10px_#3b82f6]" />
        </a>
      </Link>
      {/* WhatsApp */}
      <Link   href="https://wa.me/8801749888203" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group z-50"
        >
          <FaWhatsapp className="text-3xl text-slate-300 transition-transform duration-300 hover:scale-125 hover:text-green-400 hover:drop-shadow-[0_0_10px_#22c55e]" />
        </a>
      </Link>
        
    </div>

          {/* Download CV */}
          <div className="flex gap-5  justify-center md:justify-start ">
            <motion.a
                        href="/cv.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 z-50 bg-lime-400 text-black font-semibold rounded-full shadow-lg hover:shadow-lime-500/50 transition"
                    >
                        📄 Download CV
                    </motion.a>
          </div>

        </div>

        {/* Right Content (Profile + Orbit) */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Profile Image */}
          <motion.div 
            // initial={{ scale: 0.8, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Image
              src="https://i.ibb.co.com/VpxzR1MR/shakhawat-1.png"
              alt="Profile"
              width={260}
              height={260}
              className="rounded-full border-4 border-lime-400 shadow-xl"
            />
          </motion.div>

          

          {/* Orbiting Icons */}

            <OrbitingCircles radius={140} iconSize={5000} speed={2}>
            <FaNodeJs color="#3C873A"  className="text-4xl" />
            <SiNextdotjs className="text-white text-4xl"  />
            <SiPrisma className="text-gray-300 text-4xl" />
            <SiMongodb color="#4DB33D"  className="text-4xl"/>
            <FaReact color="#61DAFB" className="text-4xl"/>
            <SiPostgresql color="#336791" className="text-4xl" />
            <SiTypescript color="#3178C6" className="text-4xl"/>
          </OrbitingCircles>
       
        </div>
      </div>
  
    </BackgroundBeamsWithCollision>
   
     </div>

  );
}
