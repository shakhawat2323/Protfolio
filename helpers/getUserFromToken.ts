import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id?: string;
  name?: string;
  email?: string;
  iat?: number;
  exp?: number;
}

export async function getUserFromToken(): Promise<DecodedToken | null> {
  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.decode(token) as DecodedToken;
    return decoded || null;
  } catch (err) {
    console.error("Token decode error:", err);
    return null;
  }
}
