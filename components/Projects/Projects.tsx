"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Project {
  id: number;
  title: string;
  description: string;
  pictures: string;
  tags: string[];
  livelink: string;
  githublink: string;
  createdAt: string;
  updatedAt: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/api/v1/projects";

  // ✅ Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      setProjects(data?.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load projects ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Delete project
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete project");
      toast.success("Project deleted successfully 🗑️");
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete project ❌");
    }
  };

  // ✅ Update project (PATCH)
  const handleUpdate = async () => {
    if (!selected) return;

    try {
      const res = await fetch(`${API_URL}/${selected.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selected),
      });

      if (!res.ok) throw new Error("Failed to update project");

      toast.success("✅ Project updated successfully!");
      setOpen(false);
      fetchProjects(); // refresh data
    } catch (err) {
      console.error(err);
      toast.error("Failed to update project ❌");
    }
  };

  return (
    <div className="p-6 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-6"
        >
          🧩 All Projects Management
        </motion.h1>

        {/* Loader */}
        {loading ? (
          <p className="text-center text-gray-400 animate-pulse">Loading projects...</p>
        ) : (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-lg shadow-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-800/80 text-gray-300 uppercase text-xs">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Tags</th>
                  <th className="p-3 text-left">Created</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-8">
                      No projects found 😕
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-t border-zinc-800 hover:bg-zinc-800/50 transition"
                    >
                      <td className="p-3">
                        <div className="w-14 h-14 rounded-md overflow-hidden border border-zinc-700">
                          <Image
                            src={project.pictures}
                            alt={project.title}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>

                      <td className="p-3 font-medium">{project.title}</td>

                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-zinc-800 text-gray-300 text-xs border border-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="p-3 text-gray-400">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </td>

                      <td className="p-3 text-center space-x-2">
                        <Button
                          variant="outline"
                          className="border-blue-500 text-blue-400 hover:bg-blue-500/20"
                          onClick={() => {
                            setSelected(project);
                            setOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => handleDelete(project.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Edit Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg bg-zinc-900 border border-zinc-800 text-gray-100">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>

          {selected && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
              className="space-y-4"
            >
              {/* Title */}
              <div>
                <label className="text-sm font-medium">Title</label>
                <input
                  value={selected.title}
                  onChange={(e) =>
                    setSelected({ ...selected, title: e.target.value })
                  }
                  className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  value={selected.description}
                  onChange={(e) =>
                    setSelected({ ...selected, description: e.target.value })
                  }
                  rows={3}
                  className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="text-sm font-medium">Tags (comma separated)</label>
                <input
                  value={selected.tags.join(", ")}
                  onChange={(e) =>
                    setSelected({
                      ...selected,
                      tags: e.target.value.split(",").map((tag) => tag.trim()),
                    })
                  }
                  className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="text-sm font-medium">Image URL</label>
                <input
                  value={selected.pictures}
                  onChange={(e) =>
                    setSelected({ ...selected, pictures: e.target.value })
                  }
                  className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-2 flex justify-center">
                  <Image
                    src={selected.pictures}
                    alt="preview"
                    width={200}
                    height={120}
                    className="rounded-md object-cover border border-zinc-700"
                  />
                </div>
              </div>

              {/* Live Link */}
              <div>
                <label className="text-sm font-medium">Live Project Link</label>
                <input
                  value={selected.livelink}
                  onChange={(e) =>
                    setSelected({ ...selected, livelink: e.target.value })
                  }
                  placeholder="https://your-live-site.vercel.app"
                  className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* GitHub Link */}
              <div>
                <label className="text-sm font-medium">GitHub Repository Link</label>
                <input
                  value={selected.githublink}
                  onChange={(e) =>
                    setSelected({ ...selected, githublink: e.target.value })
                  }
                  placeholder="https://github.com/username/repo"
                  className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-gray-400"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-zinc-600 text-gray-300 hover:bg-zinc-800"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Save Changes
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      </div>
    </div>
  );
}
