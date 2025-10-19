"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Image from "next/image";
import { Blog } from "@/types";
interface AllBlogsProps {
  datas: {
    data: Blog[];
  };
}


export default function Allblogs({ datas }:AllBlogsProps) {
  const [data, setData] = useState<Blog[]>(datas?.data);
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

  // 🗑 DELETE blog from backend
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/blogs/${id}`, {
        method: "DELETE",
      });
      console.log(res)

      if (!res.ok) {
        toast.error("Failed to delete blog ❌");
        return;
      }

      // Remove locally from UI
      setData((prev) => prev.filter((b) => b.id !== id));
      toast.success("🗑️ Blog deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Network error while deleting blog ❌");
    }
  };

  // ✏️ Open edit modal
  const handleUpdateClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  // Local form state update
  const handleFormChange = (field: keyof Blog, value: any) => {
    setSelectedBlog((prev: any) => (prev ? { ...prev, [field]: value } : prev));
  };

  // 💾 Save blog update (PUT/PATCH)
  const handleSave = async () => {
    if (!selectedBlog) return;

    try {
      const res = await fetch(`${API_BASE}/blogs/${selectedBlog.id}`, {
        method: "PATCH", // or PATCH depending on your backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: selectedBlog.title,
          content: selectedBlog.content,
          image: selectedBlog.image,
          isPublished: selectedBlog.isPublished,
          authorId: selectedBlog.author.id, // if needed by your backend
        }),
      });

      if (!res.ok) {
        toast.error("Failed to update blog ❌");
        return;
      }

      const updated = await res.json();


      toast.success("✅ Blog updated successfully!");
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Network error while updating blog ❌");
    }
  };

  

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full "
      >
        <Card className="border border-white/10 shadow-2xl backdrop-blur-xl absolute top-5 w-[950px] bg-gradient-to-b from-zinc-900/70 to-black/50 rounded-3xl">
          <CardHeader className="pb-6 text-center">
            <div className="flex justify-center items-center gap-3">
              <span className="text-2xl">📚</span>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                All Blogs Management
              </h2>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto w-full">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-zinc-800/60 text-gray-300 border-b border-zinc-700">
                    <TableHead className="text-center w-[90px]">Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map((blog) => (
                    <motion.tr
                      key={blog.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-zinc-800/40 transition duration-200 border-b border-zinc-800"
                    >
                      <TableCell className="text-center">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={55}
                          height={35}
                          className="rounded-md border border-zinc-700 mx-auto"
                        />
                      </TableCell>

                      <TableCell className="font-medium text-gray-100">
                        {blog.title}
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Image
                            src={blog.author.image}
                            alt={blog.author.name}
                            width={30}
                            height={30}
                            className="rounded-full border border-zinc-700"
                          />
                          <div>
                            <p className="text-sm font-semibold text-gray-200">
                              {blog.author.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {blog.author.role}
                            </p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        {blog.isPublished ? (
                          <Badge className="bg-gradient-to-r from-green-500 shadow-sm">
                            Published
                          </Badge>
                        ) : (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-amber-400 text-white shadow-sm">
                            Draft
                          </Badge>
                        )}
                      </TableCell>

                      <TableCell className="text-gray-400 text-sm">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </TableCell>

                      <TableCell className="text-right space-x-2 pr-4">
                        <Button
                          onClick={() => handleUpdateClick(blog)}
                          variant="outline"
                          className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(blog.id)}
                          variant="destructive"
                          className="bg-gradient-to-r from-rose-600 to-red-500 hover:opacity-90 text-white"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ✏️ EDIT MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg bg-zinc-900/90 border border-zinc-800 text-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-cyan-400">
              ✏️ Edit Blog
            </DialogTitle>
          </DialogHeader>

          {selectedBlog && (
            <div className="space-y-4 mt-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={selectedBlog.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-gray-100"
                />
              </div>

              <div>
                <Label>Image URL</Label>
                <Input
                  value={selectedBlog.image}
                  onChange={(e) => handleFormChange("image", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-gray-100"
                />
              </div>

              <div>
                <Label>Content</Label>
                <Textarea
                  value={selectedBlog.content}
                  onChange={(e) => handleFormChange("content", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-gray-100"
                />
              </div>

              <div className="flex items-center gap-3">
                <Label>Status:</Label>
                <select
                  value={selectedBlog.isPublished ? "published" : "draft"}
                  onChange={(e) =>
                    handleFormChange("isPublished", e.target.value === "published")
                  }
                  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-1 text-gray-100"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="flex justify-end pt-4 gap-3">
                <Button
                  onClick={() => setOpen(false)}
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-zinc-800"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-semibold hover:opacity-90"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
