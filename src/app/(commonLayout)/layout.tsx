
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";


export default function CommonLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
       <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
  );
}