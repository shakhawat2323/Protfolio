
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getUserFromToken } from "@/helpers/getUserFromToken";



import React from "react";


export default async function CommonLayout({children}:{children:React.ReactNode}) {

  const session = await getUserFromToken();
 

  return (
    <div>
       <Navbar session={session}/>
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
  );
}