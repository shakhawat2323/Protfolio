"use server";

export const createOrUpdateAboutMe = async (data: FormData) => {
  const rawData = Object.fromEntries(data.entries());

  const aboutInfo = {
    technologiesMastered: Number(rawData.technologiesMastered),
    happyClients: Number(rawData.happyClients),
    completedProjects: Number(rawData.completedProjects),
    yearsOfExperience: parseFloat(rawData.yearsOfExperience as string),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/aboutme`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutInfo),
  });

  const result = await res.json();

  return result;
};
