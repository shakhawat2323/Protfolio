"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-8"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <Button
        asChild
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-slate-900 hover:opacity-90"
      >
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
