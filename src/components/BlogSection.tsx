
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Building a Modern Portfolio Website with Next.js & Prisma",
    image: "https://example.com/blogs/nextjs-prisma.png",
    author: "Super Admin",
    authorImage: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    date: "27-09-2020",
    content:
      "In this post, I’ll show you how to build a fast and SEO-friendly portfolio website using Next.js, Tailwind CSS, and Prisma ORM. You’ll learn how to structure your app, manage your database with Prisma, and deploy seamlessly to Vercel. We’ll also cover performance optimization, API integration, and image optimization strategies for modern web apps.",
  },
  {
    id: 2,
    title: "Designing Intuitive UI: Lessons from Real Projects",
    image:
      "https://cdn.dribbble.com/userupload/11053236/file/original-28a43eae2e7b401c.png",
    author: "Super Admin",
    authorImage: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    date: "20-09-2020",
    content:
      "Designing intuitive UI means understanding how users think and behave. In this article, we’ll explore design psychology, consistency, and feedback loops. We’ll discuss real-world case studies and share actionable tips for making interfaces more human-centered and easier to use.",
  },
  {
    id: 3,
    title: "How to Avoid Common Mistakes in Web Design",
    image:
      "https://cdn.dribbble.com/users/52758/screenshots/11042347/media/22a1d7895ec7e734a0a02ebc1de9c6b7.png",
    author: "Super Admin",
    authorImage: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    date: "18-09-2020",
    content:
      "Even experienced designers make mistakes—like cluttered layouts, poor color contrast, or ignoring accessibility. This post helps you identify and fix these problems early. You’ll also learn tools and techniques to validate your designs and ensure a clean, consistent visual hierarchy.",
  },
];

export default function BlogSection() {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const handleOpen = (blog: any) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden bg-gradient-to-b from-[#0a0c15] via-[#0d101d] to-black [background-image:radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]
[background-size:4px_4px]">
      {/* 🔹 Background pattern */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-800/20 tracking-tight">
          LATEST NEWS
        </h2>
        <h3 className="text-3xl font-semibold text-yellow-400 relative inline-block -mt-10">
          BLOG
          <span className="block h-[2px] bg-yellow-400 w-14 mx-auto mt-2"></span>
        </h3>
      </div>

      {/* Blog Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-[#111422]/80 backdrop-blur-md border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/10 rounded-2xl overflow-hidden group">
              {/* Blog Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <CardContent className="p-6">
                {/* Author info */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    width={32}
                    height={32}
                    className="rounded-full border border-yellow-400"
                  />
                  <div className="text-sm text-gray-400">
                    By{" "}
                    <span className="text-yellow-400 font-medium">
                      {blog.author}
                    </span>{" "}
                    | <span>{blog.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold leading-snug mb-3 hover:text-yellow-400 transition-colors">
                  {blog.title}
                </h4>

                {/* Summary */}
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                  {blog.content}
                </p>

                {/* Read More Button */}
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black cursor-pointer font-semibold rounded-full transition-all duration-300"
                  onClick={() => handleOpen(blog)}
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* More Blogs Button */}
        <div className="text-center cursor-pointer mt-14 relative ">
        <Link href="/blogs">
            <button className="bg-yellow-400 cursor-pointer text-black font-semibold px-4 py-1 rounded-full hover:bg-yellow-300 transition-all duration-300">
            More Blogs →
            </button>
        </Link>
        </div>

   

      {/* Dialog for Blog Details */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg bg-[#10131f] border border-yellow-400/20 text-white rounded-2xl shadow-2xl overflow-hidden">
          {selectedBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-yellow-400">
                  {selectedBlog.title}
                </DialogTitle>
              </DialogHeader>

              <div className="relative w-full h-48 rounded-xl overflow-hidden my-4">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={selectedBlog.authorImage}
                  alt={selectedBlog.author}
                  width={35}
                  height={35}
                  className="rounded-full border border-yellow-400"
                />
                <div className="text-sm text-gray-400">
                  By{" "}
                  <span className="text-yellow-400 font-medium">
                    {selectedBlog.author}
                  </span>{" "}
                  | <span>{selectedBlog.date}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedBlog.content}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
