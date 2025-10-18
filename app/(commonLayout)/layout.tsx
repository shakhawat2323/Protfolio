
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getUserSession } from "@/helpers/getUserSession";


import React from "react";


export default async function CommonLayout({children}:{children:React.ReactNode}) {
 const session = await getUserSession();
 console.log(session)
  return (
    <div>
       <Navbar session={session}/>
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
  );
}