/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BlogSectionProps {
  blogs?: any[];
  isPaginated?: boolean;
}

export default function BlogSection({ blogs = [], isPaginated = false }: BlogSectionProps) {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const [page, setPage] = useState(1);
  const [paginatedBlogs, setPaginatedBlogs] = useState<any[]>(blogs);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    total: 0,
    totalPages: 1,
  });

  // ✅ Fetch blogs if pagination is enabled
  useEffect(() => {
    if (!isPaginated) return;

    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?page=${page}&limit=6`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setPaginatedBlogs(data.data);
        setPagination(data.pagination);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [page, isPaginated]);

  const handleOpen = (blog: any) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const displayBlogs = isPaginated ? paginatedBlogs : blogs;

  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden bg-gradient-to-b from-[#0a0c15] via-[#0d101d] to-black">
      {/* Header */}
      <div className="relative z-10 text-center mb-5">
        <h2 className="text-5xl font-extrabold text-gray-800/20 tracking-tight">
          LATEST NEWS
        </h2>
        <h3 className="text-3xl font-semibold text-yellow-400 relative inline-block -mt-5">
          BLOG
          <span className="block h-[2px] bg-yellow-400 w-14 mx-auto mt-2"></span>
        </h3>
      </div>

            <motion.div
                    aria-hidden
                    role="img"
                    title="React"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                     className="absolute right-5  top-5 "
                  >
                    <Image src="https://i.ibb.co.com/pBWC7Lxz/saringan5.png" alt="React" width={70} height={40} />
                  </motion.div>

      {/* Blog Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {displayBlogs?.length > 0 ? (
          displayBlogs.map((blog: any, index: number) => (
            <motion.div
              key={blog._id || blog.id}
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
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold leading-snug mb-3 hover:text-yellow-400 transition-colors">
                    {blog.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                    {blog.content}
                  </p>

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
          <p className="text-center text-gray-400 col-span-3">
            No blogs available.
          </p>
        )}
      </div>

      {/* ✅ Pagination Controls */}
      {isPaginated && (
        <div className="flex justify-center mt-14 items-center gap-6">
          <Button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
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
            onClick={() => setPage((p) => p + 1)}
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full"
          >
            Next →
          </Button>
        </div>
      )}

      {/* More Blogs Button (only Home) */}
      {!isPaginated && (
        <div className="text-center mt-14">
          <Link href="/blogs">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition-all">
              More Blogs →
            </button>
          </Link>
        </div>
      )}

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
                  src={selectedBlog.Image || "/default-blog.jpg"}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={selectedBlog.author?.image || "/default-avatar.png"}
                  alt={selectedBlog.author?.name}
                  width={35}
                  height={35}
                  className="rounded-full border border-yellow-400"
                />
                <div className="text-sm text-gray-400">
                  By{" "}
                  <span className="text-yellow-400 font-medium">
                    {selectedBlog.author?.name}
                  </span>{" "}
                  |{" "}
                  <span>
                    {new Date(selectedBlog.createdAt).toLocaleDateString()}
                  </span>
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
