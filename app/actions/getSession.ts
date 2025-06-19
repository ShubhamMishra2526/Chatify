import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/auth"; // Adjust the import path as necessary

export default async function getSession() {
  return await getServerSession(authOptions);
}
