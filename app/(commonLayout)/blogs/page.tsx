import BlogSection from "@/components/BlogSection";

// app/blogs/page.tsx
export default async function BlogsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || "1");
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?page=${page}&limit=6`);
  const data = await res.json();

  return <BlogSection blogs={data.data} pagination={data.pagination} isPaginated />;
}
