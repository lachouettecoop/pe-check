import { getSession } from "~/utils/misc.server";
import Logout from "./Logout";

import { getPeHasVoted } from "~/utils/db";

export default async function Page() {
  const session = await getSession();
  const usersInPE = await getPeHasVoted();
  return (
    <div>
      COUCOU ! {JSON.stringify(session)}
      <Logout />
      <div>
        USERS:
        {usersInPE.map((user) => {
          return <div key={user.id}>{user.email}</div>;
        })}
      </div>
    </div>
  );
}
