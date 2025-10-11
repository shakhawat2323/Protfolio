"use client";

import { useState } from "react";
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

const initialProjects: Project[] = [
  {
    id: 13,
    title: "Task Manager",
    description:
      "A task management web app with drag-and-drop functionality and user authentication.",
    pictures: "https://www.chronodat.com/img/taskpro/1.jpg",
    tags: ["Next.js", "React DnD", "Firebase"],
    livelink: "https://taskmanager-demo.vercel.app",
    githublink: "https://github.com/Apollo-Level2-Web-Dev/next-blog-ui.git",
    createdAt: "2025-10-10T18:25:11.495Z",
    updatedAt: "2025-10-10T18:25:11.495Z",
  },
  {
    id: 14,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and TailwindCSS.",
    pictures: "https://i.ibb.co.com/YcF2LzK/portfolio.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    livelink: "https://myportfolio.vercel.app",
    githublink: "https://github.com/user/portfolio",
    createdAt: "2025-10-11T10:10:00.000Z",
    updatedAt: "2025-10-11T10:10:00.000Z",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success("Project deleted successfully 🗑️");
    }
  };

  const handleUpdate = () => {
    if (!selected) return;
    setProjects((prev) =>
      prev.map((p) => (p.id === selected.id ? selected : p))
    );
    toast.success("Project updated successfully 🎉");
    setOpen(false);
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
              {projects.map((project) => (
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
              ))}
            </tbody>
          </table>
        </div>

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
                <div>
                  <label className="text-sm">Title</label>
                  <input
                    value={selected.title}
                    onChange={(e) =>
                      setSelected({ ...selected, title: e.target.value })
                    }
                    className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700"
                  />
                </div>

                <div>
                  <label className="text-sm">Description</label>
                  <textarea
                    value={selected.description}
                    onChange={(e) =>
                      setSelected({ ...selected, description: e.target.value })
                    }
                    rows={3}
                    className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700"
                  />
                </div>

                <div>
                  <label className="text-sm">Tags (comma separated)</label>
                  <input
                    value={selected.tags.join(", ")}
                    onChange={(e) =>
                      setSelected({
                        ...selected,
                        tags: e.target.value
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter((tag) => tag.length > 0),
                      })
                    }
                    className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700"
                  />
                </div>

                <div>
                  <label className="text-sm">Image URL</label>
                  <input
                    value={selected.pictures}
                    onChange={(e) =>
                      setSelected({ ...selected, pictures: e.target.value })
                    }
                    className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700"
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

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-zinc-600 text-gray-300 hover:bg-zinc-800"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                  >
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
