"use server";

// import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const projectInfoRaw = Object.fromEntries(data.entries());

  const projectInfo = {
    title: projectInfoRaw.title as string,
    description: projectInfoRaw.description as string,
    pictures: projectInfoRaw.pictures as string,
    tags: (projectInfoRaw.tags as string)
      ?.split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0),
    livelink: projectInfoRaw.livelink as string,
    githublink: projectInfoRaw.githublink as string,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectInfo),
  });

  const result = await res.json();

  //   if (result) {
  //     redirect("/dashboard/project/allproject");
  //   }

  return result;
};
