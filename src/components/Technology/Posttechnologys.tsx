/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";

type Tech = {
  id: number;
  name: string;
  icon: string;
  createdAt: string;
};

export default function Posttechnologys() {
  const [techs, setTechs] = useState<Tech[]>([]);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all technologies
  const fetchTechs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/technology`, {
        cache: "no-store",
      });
      const data = await res.json();
      console.log("✅ API Response:", data);

      setTechs(Array.isArray(data) ? data : data?.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Failed to load technologies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechs();
  }, []);

  // ✅ Handle create
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !icon.trim())
      return toast.warning("All fields are required!");
    setSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/technology`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, icon }),
      });

      if (!res.ok) throw new Error("Failed to create technology");
      await fetchTechs();
      setName("");
      setIcon("");
      toast.success("✅ Technology added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while adding!");
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Handle delete
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this technology?")) return;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/technology/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete");
      setTechs((prev) => prev.filter((t) => t.id !== id));
      toast.success("🗑 Technology deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete technology!");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-100">
          Manage Technologies
        </h1>
        <div className="text-sm text-gray-400">
          Total:{" "}
          <span className="font-medium text-gray-200">{techs.length}</span>
        </div>
      </div>

      {/* Create Form */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-8 shadow-xl">
        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Technology Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. MongoDB"
              className="mt-1 w-full rounded-md border border-zinc-700 px-3 py-2 bg-transparent text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Icon URL
            </label>
            <input
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              placeholder="https://.../icon.svg"
              className="mt-1 w-full rounded-md border border-zinc-700 px-3 py-2 bg-transparent text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use a direct image URL (SVG/PNG preferred)
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-3 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md font-medium disabled:opacity-60"
          >
            {submitting ? "Adding..." : "Add Technology"}
          </button>
        </form>
      </div>

      {/* Technology Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-4 overflow-x-auto">
        {loading ? (
          <p className="text-center text-gray-400">Loading technologies...</p>
        ) : techs.length === 0 ? (
          <p className="text-center text-gray-400">No technologies found</p>
        ) : (
          <table className="w-full text-left text-gray-200 border-collapse">
            <thead>
              <tr className="bg-zinc-800 text-gray-400 text-sm uppercase">
                <th className="p-3">Icon</th>
                <th className="p-3">Name</th>
                <th className="p-3">Created</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {techs.map((t) => (
                <tr
                  key={t.id}
                  className="border-t border-zinc-700 hover:bg-zinc-800/60"
                >
                  <td className="p-3">
                    <img
                      src={t.icon}
                      alt={t.name}
                      className="w-10 h-10 object-contain rounded-md border border-zinc-700 bg-zinc-800 p-1"
                    />
                  </td>
                  <td className="p-3 font-medium">{t.name}</td>
                  <td className="p-3 text-sm text-gray-500">
                    {new Date(t.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="px-3 py-1 border border-red-600 text-red-500 rounded-md hover:bg-red-600/10 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
