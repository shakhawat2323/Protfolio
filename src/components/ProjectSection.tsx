"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DevSphere (MERN)",
    image: "https://cdn.dribbble.com/users/1162077/screenshots/15623115/media/5f1bca3191eb4d39e627f0c83d097b6c.png?resize=800x600&vertical=center",
    description:
      "A collaborative platform where developers connect, share resources, and work on projects together with.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Express", "MongoDB", "Socket.IO"],
    live: "#",
    github: "#",
  },
  {
    title: "CineFlow (MERN)",
    image: "https://cdn.dribbble.com/users/1162077/screenshots/15432792/media/7df71da154a35f6e040d6e2c9a501a92.png?resize=800x600&vertical=center",
    description:
      "A modern movie discovery portal with AI-based recommendations and user reviews — built for.",
    tech: ["React", "Node.js", "Firebase", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "TaskNest (Full Stack)",
    image: "https://cdn.dribbble.com/users/1162077/screenshots/15542204/media/1ad3dc81fdfc38aa42d267f1889699a2.png?resize=800x600&vertical=center",
    description:
      "Smart productivity app that syncs your daily goals and progress with cloud storage and AI suggestions.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Redis"],
    live: "#",
    github: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20  text-white relative overflow-hidden [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
[background-size:40px_40px]
">
      {/* Subtle moving gradient background animation */}
      <motion.div
        className="absolute inset-0  blur-3xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />
             <motion.div
                    aria-hidden
                    role="img"
                    title="React"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 13 }}
                    className="absolute z-50 hidden lg:block  lg:left-5 "
                  >
                    <Image src="https://i.ibb.co.com/YT2gS7yK/erth.png" alt="React" width={70} height={70} />
                  </motion.div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 ">
          Featured Projects ✨
        </h2>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="relative overflow-hidden border border-purple-500/20 bg-[#0D111A] rounded-2xl shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] group">
                {/* Animated glowing border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 20px 2px rgba(168, 85, 247, 0.2)",
                      "0 0 35px 4px rgba(236, 72, 153, 0.3)",
                      "0 0 20px 2px rgba(168, 85, 247, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image */}
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-purple-300 tracking-wide">
                      {project.title}
                    </CardTitle>
                    <Link href={project.github} target="_blank">
                      <Github className="w-5 h-5 hover:text-purple-400 transition-colors" />
                    </Link>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[13px] px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-6 pt-0">
                  <Link href={project.live} target="_blank" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-purple-400/50 text-purple-300  transition-all"
                    >
                      Live Preview
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-9">
          <Link href="/projects">
             <Button
                      variant="outline"
                      className="w-35 cursor-pointer border-purple-400/50 text-purple-300  transition-all"
                    >
                       View More Projects
                    </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
