import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 20 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        return true;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
