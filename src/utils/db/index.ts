import { getUsersInPE } from "./adminChouettos";
import { hasUsersHasVoted } from "./enjolras";

export const getPeHasVoted = async () => {
  const usersInPE = await getUsersInPE();
  return await hasUsersHasVoted(usersInPE.map((u) => u.email));
};
