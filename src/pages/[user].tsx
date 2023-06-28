import { Inter } from "next/font/google";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";

import { TUser, TUserRepos } from "@/types/user.type";
import { getUser, getUserRepos } from "@/api/userApi";
import User from "@/pages/UserPage/User";
import UserRepos from "@/pages/UserPage/UserRepos";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps<{
  user: TUser;
  userRepos: TUserRepos[];
}> = async (context) => {
  const { user }: string = context.query;

  const userData: TUser = await getUser(user);
  const userRepos: TUserRepos[] = await getUserRepos(user);

  return { props: { user: userData, userRepos } };
};

const UserPage = ({
  user,
  userRepos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { login, followers_count, following_count, created, avatar_url } =
    user as TUser;

  return (
    <main
      className={`flex min-h-screen justify-between p-12 ${inter.className} w-full`}
    >
      <User
        followers_count={followers_count}
        following_count={following_count}
        avatar_url={avatar_url}
        created={created}
        login={login}
      />
      <UserRepos data={userRepos}/>
    </main>
  );
}

export default UserPage
