// app/404.tsx
"use client"; // only if you must use hooks

import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">404 | Page Not Found</h1>
    </div>
  );
}
