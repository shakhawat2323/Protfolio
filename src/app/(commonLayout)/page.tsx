
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";




export  default async  function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next:{
      revalidate:30
    }
  });
  const blog = await res.json();

    const project = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
    next: { revalidate: 30 },
  });
  const data = await project.json();
  const firstThree = data?.data?.slice(0, 3) || [];

     const mona = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/aboutme`,{
    next:{
      revalidate:30
    }
   })
   const mymona = await mona.json()


  return (
     <div className="text-2xl text-purple-900">
       <HeroSection/>
      <AboutSection mymona={mymona}/>
       <Skills/>
     <ProjectSection projects={firstThree} />
     <BlogSection blogs={blog?.data?.slice(0, 3) || []} />
       
       <ContactSection/>
      
     </div>
  );
}
