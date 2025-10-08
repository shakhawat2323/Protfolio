"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceBadge from "./ExperienceBadge";
import Logo from "../../public/img/shakhawat-mona.png";
import Link from "next/link";
import Roket from "../../public/img/about-roket.png";
import Rsingan from "../../public/img/Infinity-Saringan.png";
export default function AboutSection() {
  return (
    <section
      
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-slate-900  via-slate-900 to-black text-white    [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]
      [background-size:20px_20px]"
    >
        <motion.div
  aria-hidden
  role="img"
  title="Rocket"
  initial={{ x: 0, rotate: 0 }}
  animate={{
    x: [0, -30, 0, 30, 0], 
    y: [0, -10, 0, 10, 0], 
    rotate: [0, 5, -5, 5, 0], 
  }}
  transition={{
    duration: 6, 
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-32 top-2 lg:right-17 lg:top-2 bottom-10 md:bottom-20"
>
  <Image
    src={Roket}
    alt="Rocket"
    width={70}
    height={70}
    className="drop-shadow-[0_0_12px_rgba(255,100,200,0.6)]"
  />
</motion.div>

        <motion.div
              aria-hidden
              role="img"
              title="React"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
               className="absolute left-5   -bottom-5 "
            >
              <Image src={Rsingan} alt="React" width={70} height={40} />
            </motion.div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content - Profile Image + Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative flex justify-center">
            {/* Profile Card */}
            <div className="relative w-[320px] h-[420px] rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Gradient Background Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70 via-slate-900/80 to-black/90 rounded-[2rem] backdrop-blur-md border border-slate-700 shadow-lg" />

              {/* Profile Image */}
              <Image
                src={Logo}
                alt="Profile"
                width={407}
                height={420}
                className="relative z-10 object-cover w-full right-4 rounded-[2rem]"
              />

              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-lime-400/20 shadow-[0_0_25px_5px_rgba(132,204,22,0.15)]" />
            </div>

            {/* Floating Badge */}
            <div className="absolute lg:-right-20  lg:top-20 right-0 top-110 transform -translate-y-1/2 z-50">
              <ExperienceBadge />
            </div>
          </div>
        </motion.div>

        {/* Right Content - About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-lime-400 text-lg font-semibold uppercase tracking-wide">
            About Me
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
            I can develop <br />
            <span className="text-lime-400">web solutions</span> that help
            people
          </h3>

          <p className="text-lg text-slate-300 leading-relaxed">
            Hi, I’m <span className="text-lime-400 font-semibold">Shakhawat Islam</span>, a passionate
            <span className="text-lime-400"> Full Stack Web Developer</span>.
            I love creating modern, scalable, and user-friendly web
            applications. My focus is always on building products that deliver
            both performance and great user experiences.
          </p>

          {/* 🔥 Read More Button */}
          <motion.div
            className="pt-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2 bg-lime-400 text-black font-semibold rounded-full shadow-lg hover:shadow-lime-500/40 transition-all duration-300 hover:bg-lime-300"
            >
              Read More
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
