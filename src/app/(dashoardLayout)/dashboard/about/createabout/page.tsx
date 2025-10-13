import About from "@/components/About/About";

export default async function Abouts() {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/aboutme`,{
    next:{
      revalidate:30
    }
   })
   const data = await res.json()
   console.log(data)
  return (
    <div>
    <About data={data}/>
    </div>
  );
}