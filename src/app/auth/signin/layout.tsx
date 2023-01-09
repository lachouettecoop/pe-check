import { getSession } from "~/utils/misc.server";
import { redirect } from "next/navigation";
import routes from "~/utils/routes";

export default async function Layout({ children }) {
  const session = await getSession();

  if (session) {
    redirect(routes.home);
  } else {
    return <>{children}</>;
  }
}
