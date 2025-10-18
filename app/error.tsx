"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4"
      >
        Something went wrong
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-8"
      >
        We’re sorry, but an unexpected error occurred.
      </motion.p>

      <div className="flex gap-3">
        <Button
          onClick={() => reset()}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-slate-900 hover:opacity-90"
        >
          Try Again
        </Button>

        <Button variant="outline" className="text-pink-400 border-pink-400 hover:bg-pink-400 hover:text-slate-900">
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
}
