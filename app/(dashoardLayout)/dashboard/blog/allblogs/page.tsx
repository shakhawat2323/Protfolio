import Allblogs from "@/components/Blogs/Allblogs";

export default async function Allblog() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
  const datas = await res.json();
  console.log(datas)
  return (
    <div>
      <Allblogs datas={datas}/>
    </div>
  );
}



