"use server";

export const createCertification = async (data: FormData) => {
  const certRaw = Object.fromEntries(data.entries());

  // --- Convert properly typed data ---
  const certification = {
    title: certRaw.title as string,
    org: certRaw.org as string,
    year: certRaw.year as string,
    image: certRaw.image as string,
    aboutMeId: parseInt(certRaw.aboutMeId as string),
  };
  console.log(certification);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/certifications`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(certification),
    }
  );
  console.log(res);
  const result = await res.json();
  console.log(result);
  return result;
};
