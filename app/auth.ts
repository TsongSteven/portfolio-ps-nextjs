import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { verifyPassword } from "@/lib/password"
import getUserByEmail from "@/lib/user"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) return null

          const user = await getUserByEmail(credentials.email as string)

          console.log("USER:", user);

          if (!user) {
            console.log("User not found");
            return null;
          }
  
          const isValid = await verifyPassword(
              credentials.password as string,
              user.password
          )
          
          console.log("PASSWORD VALID:", isValid);
          if (!isValid) return null

          return {
              id : user.id,
              email: user.email
          }
        } catch (error) {
          console.error("Auth error:", error); 
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
})