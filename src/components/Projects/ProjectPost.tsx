"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";

// If you use shadcn components in your project replace plain elements with Shadcn ones.
// This example uses basic accessible HTML + Tailwind classes with a shadcn-like look.

export default function ProjectPost() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    pictures: "",
    livelink: "",
    githublink: "",
  });
  const [tags, setTags] = useState<string[]>(["Next.js", "React DnD", "Firebase"]);
  const [preview, setPreview] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const tagInputRef = useRef<HTMLInputElement | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (form.pictures && !isValidUrl(form.pictures)) e.pictures = "Invalid image URL";
    if (form.livelink && !isValidUrl(form.livelink)) e.livelink = "Invalid URL";
    if (form.githublink && !isValidUrl(form.githublink)) e.githublink = "Invalid URL";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  function isValidUrl(u: string) {
    try {
      new URL(u);
      return true;
    } catch {
      return false;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (name === "pictures") setPreview(value);
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAddTag = (value?: string) => {
    const v = (value ?? tagInputRef.current?.value ?? "").trim();
    if (!v) return;
    if (tags.includes(v)) {
      toast.error("Tag already added");
      return;
    }
    setTags((t) => [...t, v]);
    if (tagInputRef.current) tagInputRef.current.value = "";
  };

  const handleRemoveTag = (tag: string) => {
    setTags((t) => t.filter((x) => x !== tag));
  };

  const handleKeyTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    } else if (e.key === "Backspace" && (e.target as HTMLInputElement).value === "") {
      // remove last tag
      setTags((t) => t.slice(0, -1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Fix the errors in the form");
      return;
    }

    const payload = { ...form, tags };
    try {
      // Example POST - update endpoint as needed
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save project");
      toast.success("Project created successfully 🎉");
      // reset
      setForm({ title: "", description: "", pictures: "", livelink: "", githublink: "" });
      setTags([]);
      setPreview("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 flex items-start justify-center">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 shadow-xl backdrop-blur-md p-6"
        >
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              ✨ Add New Project
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Provide project details, tags and links. This form is responsive and supports
              dark mode.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title + Live/Git links (grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Task Manager"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 ${
                    errors.title ? "border-rose-500" : "border-gray-200 dark:border-zinc-700"
                  }`}
                />
                {errors.title && <p className="mt-1 text-xs text-rose-400">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Live Link
                </label>
                <input
                  name="livelink"
                  value={form.livelink}
                  onChange={handleChange}
                  placeholder="https://taskmanager-demo.vercel.app"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 ${
                    errors.livelink ? "border-rose-500" : "border-gray-200 dark:border-zinc-700"
                  }`}
                />
                {errors.livelink && (
                  <p className="mt-1 text-xs text-rose-400">{errors.livelink}</p>
                )}
              </div>

              <div className="space-y-2 md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  GitHub Link
                </label>
                <input
                  name="githublink"
                  value={form.githublink}
                  onChange={handleChange}
                  placeholder="https://github.com/username/repo"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 ${
                    errors.githublink ? "border-rose-500" : "border-gray-200 dark:border-zinc-700"
                  }`}
                />
                {errors.githublink && (
                  <p className="mt-1 text-xs text-rose-400">{errors.githublink}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="A task management web app with drag-and-drop functionality..."
                className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 ${
                  errors.description ? "border-rose-500" : "border-gray-200 dark:border-zinc-700"
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-xs text-rose-400">{errors.description}</p>
              )}
            </div>

            {/* Image URL + Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Image URL
                </label>
                <input
                  name="pictures"
                  value={form.pictures}
                  onChange={handleChange}
                  placeholder="https://www.chronodat.com/img/taskpro/1.jpg"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 ${
                    errors.pictures ? "border-rose-500" : "border-gray-200 dark:border-zinc-700"
                  }`}
                />
                {errors.pictures && <p className="mt-1 text-xs text-rose-400">{errors.pictures}</p>}
              </div>

              <div className="md:col-span-1 flex items-center justify-center">
                <div className="w-full">
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">Preview</div>
                  <div className="w-full h-36 rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden bg-gray-50 dark:bg-zinc-800 flex items-center justify-center">
                    {preview ? (
                      // next/image requires external host configured; fallback to img if needed
                      <Image
                        src={preview}
                        alt="preview"
                        width={320}
                        height={180}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="text-xs text-gray-400">No image URL provided</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Tags
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 text-sm bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-700"
                  >
                    <span>{t}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(t)}
                      className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs bg-white/10 hover:bg-white/20"
                      aria-label={`Remove tag ${t}`}
                    >
                      ×
                    </button>
                  </span>
                ))}

                <input
                  ref={tagInputRef}
                  placeholder="Add tag and press Enter"
                  className="min-w-[160px] px-3 py-1 text-sm rounded-md border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:text-gray-100"
                  onKeyDown={handleKeyTag}
                />
                <button
                  type="button"
                  onClick={() => handleAddTag()}
                  className="ml-2 px-3 py-1 rounded-md bg-lime-600 text-white text-sm hover:bg-lime-500"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setForm({ title: "", description: "", pictures: "", livelink: "", githublink: "" });
                  setTags([]);
                  setPreview("");
                  setErrors({});
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-700 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:opacity-90"
              >
                Reset
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 rounded-md bg-gradient-to-r from-lime-500 to-cyan-400 text-black font-semibold hover:opacity-95"
              >
                Create Project
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
