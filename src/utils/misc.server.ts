import { unstable_getServerSession } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await unstable_getServerSession(authOptions);
}
