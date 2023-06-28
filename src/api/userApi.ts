import { TUser, TUserRepos } from "@/types/user.type";
import axios from "axios";

export const getUser = async (user: string): Promise<TUser> => {
  const res = await axios.get(`https://try.gitea.io/api/v1/users/${user}`);
  return res.data;
};

export const getUserRepos = async (user: string): Promise<TUserRepos[]> => {
  const res = await axios.get(
    `https://try.gitea.io/api/v1/users/${user}/repos`
  );
  return res.data;
};
