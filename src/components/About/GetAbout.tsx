/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

type Certification = {
  id: number;
  title: string;
  org: string;
  year: string;
  image: string;
  aboutMeId?: number;
};

export default function GetAbout() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [editingCert, setEditingCert] = useState<Certification | null>(null);
  const [open, setOpen] = useState(false);
  const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/certifications`;

  // ====== Fetch all certifications ======
  const fetchCertifications = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch certifications");
      const data = await res.json();
      setCertifications(data?.data || data);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to load certifications");
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []);

  // ====== Delete certification ======
  const handleDeleteCert = async (id: number) => {
    if (!confirm("Are you sure you want to delete this certification?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      setCertifications((prev) => prev.filter((c) => c.id !== id));
      toast.success("🗑️ Deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to delete");
    }
  };

  // ====== Save (PATCH or POST new) ======
  const handleSaveCert = async (cert: Certification) => {
    try {
      const method = cert.id ? "PATCH" : "POST";
      const url = cert.id ? `${API_URL}/${cert.id}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...cert, aboutMeId: 1 }),
      });

      if (!res.ok) throw new Error("Failed to save certification");

      toast.success("✅ Certification saved successfully!");
      setOpen(false);
      fetchCertifications();
    } catch (err) {
      console.error(err);
      toast.error("❌ Error saving certification");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 w-[900px]">
      {/* ====== CERTIFICATIONS TABLE ====== */}
      <div className="bg-white dark:bg-zinc-900 shadow-md border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
      

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Image</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certifications.length > 0 ? (
                certifications.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell>{cert.title}</TableCell>
                    <TableCell>{cert.org}</TableCell>
                    <TableCell>{cert.year}</TableCell>
                    <TableCell>
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-16 h-12 object-cover rounded-md border border-gray-200"
                        />
                      ) : (
                        <div className="w-16 h-12 rounded-md bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xs text-gray-400">
                          No image
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingCert(cert);
                          setOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteCert(cert.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No certifications found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* ====== EDIT / ADD DIALOG ====== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingCert?.id ? "Edit Certification" : "Add Certification"}
            </DialogTitle>
          </DialogHeader>

          {editingCert && (
            <EditCertForm
              cert={editingCert}
              onSave={handleSaveCert}
              onCancel={() => setOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* === Dialog Form === */
function EditCertForm({
  cert,
  onSave,
  onCancel,
}: {
  cert: Certification;
  onSave: (cert: Certification) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(cert);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="space-y-4"
    >
      <div>
        <Label>Title</Label>
        <Input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="e.g. Node.js Advanced"
          required
        />
      </div>

      <div>
        <Label>Organization</Label>
        <Input
          value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
          placeholder="e.g. Udemy"
          required
        />
      </div>

      <div>
        <Label>Year</Label>
        <Input
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          placeholder="e.g. 2024"
          required
        />
      </div>

      <div>
        <Label>Image URL</Label>
        <Input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          placeholder="https://example.com/image.png"
        />
      </div>

      {/* aboutMeId fixed */}
      <input type="hidden" name="aboutMeId" value={1} />

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
