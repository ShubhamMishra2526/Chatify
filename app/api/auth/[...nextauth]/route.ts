import NextAuth from "next-auth";
import { authOptions } from "@/app/libs/auth"; // ✅ import from a separate file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // ✅ valid exports
