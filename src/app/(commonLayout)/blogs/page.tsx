import BlogSection from "@/components/BlogSection";

export  default async function Blog() {

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,{
    // cache:"force-cache",
    next:{
      revalidate:30
    }
  })
  const blog = await data.json()
  console.log(blog.data)
  
  return (
    <div>
    <BlogSection blogs={blog?.data || []} isPaginated/>
    </div>
  );
}