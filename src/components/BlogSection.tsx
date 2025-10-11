/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

interface BlogSectionProps {
    isPaginated?: boolean;
  blogs: any[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function BlogSection({ blogs = [], pagination ,isPaginated = false}: BlogSectionProps) {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [page, setPage] = useState(pagination?.page || 1);

  const handleOpen = (blog: any) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handlePagination = async (newPage: number) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?page=${newPage}&limit=6`, {
        cache: "no-store",
      });
      const data = await res.json();
      // Client side pagination update
      window.location.href = `/blogs?page=${newPage}`; // SSR page reload for SEO
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden bg-gradient-to-b from-[#0a0c15] via-[#0d101d] to-black">
      <div className="relative z-10 text-center mb-5">
        <h2 className="text-5xl font-extrabold text-gray-800/20 tracking-tight">LATEST NEWS</h2>
        <h3 className="text-3xl font-semibold text-yellow-400 relative inline-block -mt-5">
          BLOG
          <span className="block h-[2px] bg-yellow-400 w-14 mx-auto mt-2"></span>
        </h3>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {blogs?.length > 0 ? (
          blogs.map((blog: any, index: number) => (
            <motion.div
              key={blog.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#111422]/80 backdrop-blur-md border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/10 rounded-2xl overflow-hidden group">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={blog.Image || "/default-blog.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={blog.author?.image || "/default-avatar.png"}
                      alt={blog.author?.name || "Author"}
                      width={32}
                      height={32}
                      className="rounded-full border border-yellow-400"
                    />
                    <div className="text-sm text-gray-400">
                      By{" "}
                      <span className="text-yellow-400 font-medium">
                        {blog.author?.name || "Unknown"}
                      </span>{" "}
                      |{" "}
                      <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h4
                    className="text-lg font-semibold leading-snug mb-3 hover:text-yellow-400 transition-colors cursor-pointer"
                    onClick={() => handleOpen(blog)}
                  >
                    {blog.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-5 line-clamp-3">{blog.content}</p>

                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full"
                    onClick={() => handleOpen(blog)}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-3">No blogs available.</p>
        )}
      </div>

      {/* ✅ Pagination Controls */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center mt-14 items-center gap-6">
          <Button
            disabled={page === 1}
            onClick={() => handlePagination(page - 1)}
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full"
          >
            ← Prev
          </Button>

          <span className="text-gray-300 text-sm">
            Page <span className="text-yellow-400">{pagination.page}</span> of{" "}
            <span className="text-yellow-400">{pagination.totalPages}</span>
          </span>

          <Button
            disabled={page === pagination.totalPages}
            onClick={() => handlePagination(page + 1)}
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full"
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
              More Blog →
            </button>
          </Link>
        </div>
      )}

      {/* Blog Dialog */}
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
                  src={selectedBlog.Image || "/default-blog.jpg"}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{selectedBlog.content}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
