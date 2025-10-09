"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaUserGraduate,
  FaBrain,
  FaCertificate,
} from "react-icons/fa";


export default function Aboutme() {
  return (
    <section
      id="about"
         className="relative py-20 px-6 md:px-16 text-white
      bg-gradient-to-b from-slate-900 via-slate-900 to-black
      [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]
      [background-size:20px_20px] overflow-hidden"
    >

            <motion.div
             aria-hidden
             role="img"
             title="React"
             initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                 className="absolute right-5  top-5 "
                 >
                  <Image src="https://i.ibb.co.com/SwvSXvXk/saringan6.png" alt="React" width={70} height={40} />
                  </motion.div>
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-lime-500">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate{" "}
            <span className="text-lime-500 font-semibold">
              MERN Stack Developer
            </span>{" "}
            with 1.5 years of experience in building high-quality, responsive web
            applications that combine modern design with solid backend logic.
          </p>
        </motion.div>

        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-[320px] h-[420px] rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70 via-slate-900/80 to-black/90 rounded-[2rem]" />
              <Image
                src="https://i.ibb.co.com/hFLVH9K0/shakhawat-mona.png"
                alt="Profile"
                width={400}
                height={420}
                className="relative z-10 right-4 object-cover w-full rounded-[2rem]"
              />
            </div>
          </motion.div>

          {/* Text Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-lime-500">
              I’m Shakhawat Islam
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A <span className="text-lime-500 font-semibold">MERN Stack Developer</span> with{" "}
              <b>1.5 years</b> of freelance experience. I specialize in React, Next.js,
              Node.js & MongoDB, delivering smooth user experiences and clean backend APIs.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              I love building creative, scalable digital products and continuously
              improving through collaboration and open-source contributions.
            </p>

     
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Years of Experience", value: "1.5+", icon: <FaAward /> },
            { label: "Completed Projects", value: "20+", icon: <FaLaptopCode /> },
            { label: "Happy Clients", value: "8+", icon: <FaGithub /> },
            { label: "Technologies Mastered", value: "15+", icon: <FaUserGraduate /> },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-md hover:shadow-lime-500/20 transition"
            >
              <div className="text-lime-500 text-3xl mb-3 flex justify-center">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold">{item.value}</h4>
              <p className="text-slate-500 dark:text-slate-300">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* 🧠 My Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-3xl font-bold text-lime-500">My Strengths</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Strong Problem Solving & Debugging",
              "Clean Code & Scalable Architecture",
              "Pixel-perfect UI Implementation",
              "Fast Learner & Continuous Improvement",
              "Effective Communication & Collaboration",
              "Adaptability in Modern Tech Stacks",
            ].map((strength, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800 shadow-md hover:shadow-lime-500/10 transition"
              >
                <FaBrain className="text-lime-500 text-2xl mb-3 mx-auto" />
                <p className="text-slate-600 dark:text-slate-300">{strength}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 📈 My GitHub Activity */}
<section className="py-16 text-center">
  <h2 className="text-4xl font-bold text-lime-500 mb-8">My GitHub Activity</h2>
  <div className="space-y-8">
    <div>
      <h3 className="text-lg mb-3 text-slate-400">GitHub Streak</h3>
      <Image
         src="https://github-readme-streak-stats.herokuapp.com/?user=shakhawat2323&theme=react&hide_border=true"
        alt="GitHub Streak"
        width={600}
        height={300}
        unoptimized
        className="rounded-xl shadow-lg mx-auto"
      />
    </div>

    <div>
      <h3 className="text-lg mb-3 text-slate-400">GitHub Stats</h3>
      <Image
         src="https://github-readme-activity-graph.vercel.app/graph?username=shakhawat2323&theme=react-dark&hide_border=true&bg_color=0D1117"
        alt="GitHub Stats"
        width={600}
        height={300}
        unoptimized
        className="rounded-xl shadow-lg mx-auto"
      />
    </div>

    <div>
      <h3 className="text-lg mb-3 ">Contribution Graph</h3>
      <Image
       src="https://ghchart.rshah.org/258E48/shakhawat2323"
        alt="GitHub Activity Graph"
        width={800}
        height={400}
        unoptimized
        className="rounded-2xl shadow-lg mx-auto"
      />
    </div>
  </div>
</section>


        {/* 🎓 Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-lime-500 mb-10">
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "JavaScript (Advanced) Certificate",
                org: "HackerRank",
                date: "2024",
              },
              {
                title: "Full Stack Open",
                org: "University of Helsinki",
                date: "2023",
              },
              {
                title: "Frontend Development with React",
                org: "Meta / Coursera",
                date: "2023",
              },
              {
                title: "Backend Development with Node.js",
                org: "FreeCodeCamp",
                date: "2024",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-md hover:shadow-lime-500/20 transition"
              >
                <div className="flex items-center gap-3 mb-3 text-lime-500 text-2xl">
                  <FaCertificate />
                  <h4 className="text-xl font-bold">{cert.title}</h4>
                </div>
                <p className="text-slate-400">{cert.org}</p>
                <p className="text-slate-500 dark:text-slate-300">
                  Issued: {cert.date}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 🌐 Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 pt-12"
        >
          <Link href="https://github.com/shakhawat2323" target="_blank">
            <FaGithub className="text-3xl hover:text-lime-400 transition" />
          </Link>
          <Link href="https://linkedin.com/in/shakhawat2323" target="_blank">
            <FaLinkedin className="text-3xl hover:text-lime-400 transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
