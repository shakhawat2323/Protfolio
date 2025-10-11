import ProjectSection from "@/components/ProjectSection";

export default async function ProjectsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || 1;
  const limit = 6;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const projects = data?.data || [];
  const pagination = data?.pagination || { page: 1, totalPages: 1 };

  return (
    <div>
      <ProjectSection projects={projects} pagination={pagination} isPaginated />
    </div>
  );
}
