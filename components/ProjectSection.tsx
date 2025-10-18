/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  pictures: string;
  tags: string[];
  livelink: string;
  githublink:string;
  createdAt: string;
}

interface Pagination {
  page: number;
  totalPages: number;
}

interface ProjectSectionProps {
    isPaginated?: boolean;
  projects: Project[];
  pagination?: Pagination;
}

export default function ProjectSection({ projects, pagination ,isPaginated = false}: ProjectSectionProps) {
  const [currentPage, setCurrentPage] = useState(pagination?.page || 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      window.location.href = `/projects?page=${currentPage - 1}`;
    }
  };

  const handleNext = () => {
    if (currentPage < (pagination?.totalPages || 1)) {
      window.location.href = `/projects?page=${currentPage + 1}`;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 text-white relative overflow-hidden [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 blur-3xl"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "400% 400%" }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
          Featured Projects ✨
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card className="relative overflow-hidden border border-purple-500/20 bg-[#0D111A] rounded-2xl shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] group">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                      <Image
                        src={project.pictures}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg font-semibold text-purple-300 tracking-wide">
                        {project.title}
                      </CardTitle>
                      <Link href={project.githublink} target="_blank">
                        <Github className="w-5 h-5 hover:text-purple-400 transition-colors" />
                      </Link>
                    </div>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[13px] px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Link href={project.livelink} target="_blank" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-purple-400/50 text-purple-300 transition-all"
                      >
                        Live Preview
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3">No projects available.</p>
          )}
        </div>

        {/* ✅ Pagination Controls */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-14">
            <Button
              onClick={handlePrev}
              disabled={currentPage === 1}
              variant="outline"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-400 hover:text-black rounded-full"
            >
              ← Prev
            </Button>

            <span className="text-gray-300 text-sm">
              Page{" "}
              <span className="text-purple-400">{pagination.page}</span> of{" "}
              <span className="text-purple-400">{pagination.totalPages}</span>
            </span>

            <Button
              onClick={handleNext}
              disabled={currentPage === pagination.totalPages}
              variant="outline"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-400 hover:text-black rounded-full"
            >
              Next →
            </Button>
          </div>
        )}

              {/* 🔗 More Projects (Home Only) */}
      {!isPaginated && (
        <div className="text-center mt-14">
          <Link href="/projects">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition-all">
              More Projects →
            </button>
          </Link>
        </div>
      )}
      </div>
    </section>
  );
}
