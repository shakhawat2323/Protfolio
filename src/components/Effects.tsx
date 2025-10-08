"use client";

import { useEffect } from "react";

export default function Effects() {
  // Splash Cursor Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Splash Cursor Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_var(--cursor-x)_var(--cursor-y),rgba(120,119,198,0.2),transparent_80%)]" />

      {/* Shooting Stars */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[80px] bg-gradient-to-b from-white/90 to-transparent animate-fall"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `-${Math.random() * 100}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
