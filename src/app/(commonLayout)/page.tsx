
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";




export  default async  function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next:{
      revalidate:30
    }
  });
  const blog = await res.json();

  console.log(blog)
  return (
     <div className="text-2xl text-purple-900">
       <HeroSection/>
       <Skills/>
       <ProjectSection/>
     <BlogSection blogs={blog?.data?.slice(0, 3) || []} />
       
       <ContactSection/>
      
     </div>
  );
}


// [background-image:radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]
// [background-size:4px_4px]



// [background-image:repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 100%)]
// [background-size:60px_60px]


{/* <section
  className="relative py-20 px-6 md:px-16 text-white 
  bg-gradient-to-b from-slate-900 via-slate-900 to-black
  [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
  [background-size:40px_40px] overflow-hidden"
> */}
