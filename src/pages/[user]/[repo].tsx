import { Inter } from "next/font/google";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {useRouter} from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { repo }: string = context.query;

  return { props: {} };
};

const RepoPage = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  useRouter()
  return (
    <main
      className={`flex min-h-screen justify-between p-12 ${inter.className} w-full`}
    ></main>
  );
};

export default RepoPage;
