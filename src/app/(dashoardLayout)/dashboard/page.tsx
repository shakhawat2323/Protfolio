import Dashboards from "@/components/Dashboard/Dashboards";


export default async function Dashboard() {
   const aboutme = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/certifications`,{
    next:{
      revalidate:30
    }
   })
   const blog  = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,{
    next:{
      revalidate:30
    }
   })
   const project  = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`,{
    next:{
      revalidate:30
    }
   })
   const technology = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/technology`);
const technologys = await technology.json();
const technologyscount = Array.isArray(technologys) ? technologys.length : technologys.data?.length || 0;

   const projets = await project.json()
   const blogs = await blog.json()
   const blogsdata =blogs?.pagination?.total
   const Aboutme = await aboutme.json()
   const certificationscount = Array.isArray(Aboutme) ? Aboutme.length : technologys.data?.length || 0;
 
  
    const alldata ={
      technologyscount,
      projets,
      blogsdata,
      certificationscount

    }

  return (
    <div>

      <Dashboards alldata={alldata}/>
    </div>
  );
}