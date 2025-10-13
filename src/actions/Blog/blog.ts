"use server";

import { redirect } from "next/navigation";

export const createblog = async (data: FormData) => {
  const bloginfoRaw = Object.fromEntries(data.entries());

  // Convert types properly
  const bloginfo = {
    title: bloginfoRaw.title as string,
    content: bloginfoRaw.content as string,
    image: bloginfoRaw.image as string,
    isPublished: bloginfoRaw.isPublished === "true", // convert string to boolean
    authorId: parseInt(bloginfoRaw.authorId as string, 10), // convert string to number
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bloginfo),
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  const result = await res.json();

  if (result) {
    redirect("/dashboard/blog/allblogs");
  }
  return result;
};
