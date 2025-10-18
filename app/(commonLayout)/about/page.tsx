import Aboutme from "@/components/Aboutme";

export  default async function About() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/aboutme`,{
    next:{
      revalidate:30
    }
   })
   const data = await res.json()
   console.log(data)
  return (
    <div>
    <Aboutme data={data}/>
    </div>
  );
}