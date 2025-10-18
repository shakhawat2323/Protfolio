import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | number;
      name?: string | null;
      email?: string | null;
    };
    accessToken?: string;
    refreshToken?: string;
  }

  interface User {
    id: string | number;
    name?: string | null;
    email?: string | null;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string | number;
    name?: string | null;
    email?: string | null;
    accessToken?: string;
    refreshToken?: string;
  }
}
