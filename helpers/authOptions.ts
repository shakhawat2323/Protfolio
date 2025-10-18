import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email or Password missing");
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const result = await res.json();
          console.log("Backend Response:", result);

          if (!res.ok || !result?.data?.accessToken) {
            throw new Error(result?.message || "Login failed");
          }

          // ✅ Return user object (NextAuth will encode this in JWT)
          return {
            id: result.data.id,
            name: result.data.name,
            email: result.data.email,
            accessToken: result.data.accessToken,
            refreshToken: result.data.refreshToken,
          };
        } catch (err) {
          console.error("Authorize Error:", err);
          return null;
        }
      },
    }),
  ],

  // ✅ JWT + Session callbacks
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.name = user.name;
  //       token.email = user.email;
  //       token.accessToken = user.accessToken;
  //       token.refreshToken = user.refreshToken;
  //     }
  //     return token;
  //   },

  //   async session({ session, token }) {
  //     session.user = {
  //       id: token.id as string,
  //       name: token.name as string,
  //       email: token.email as string,
  //     };
  //     session.accessToken = token.accessToken as string;
  //     session.refreshToken = token.refreshToken as string;
  //     return session;
  //   },
  // },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};
