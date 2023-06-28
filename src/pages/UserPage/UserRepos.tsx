import { memo, useMemo } from "react";
import { TUserRepos } from "@/types/user.type";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ru from "dayjs/locale/ru";
import StarIcon from "@/assets/icons/StarIcon";
import ForkIcon from "@/assets/icons/ForkIcon";
import Link from "next/link";
import { useRouter } from "next/router";

const UserRepos = memo<{ data: TUserRepos[] }>(({ data }) => {
  const router = useRouter();
  const { user }: string = router.query;

  const getReposFields = useMemo(
    () =>
      data.map((e) => {
        const {
          name,
          updated_at,
          language,
          forks_count,
          stars_count,
          description,
        } = e;
        dayjs.extend(relativeTime).locale(ru);
        const formattedDate = `Обновлено ${dayjs(updated_at).fromNow()}`;

        return (
          <Link className="group" href={user + "/" + name} key={name}>
            <div className="flex-col flex gap-y-2 w-full border-t-2 border-gray-500 py-4">
              <div className="flex w-full justify-between max-h-5">
                <div className="group-hover:text-blue-500">{name}</div>
                <div className="flex gap-x-2">
                  <div>{language}</div>
                  <div className="flex">
                    <StarIcon fill="white" width="20px" height="100%" />
                    {stars_count}
                  </div>
                  <div className="flex">
                    <ForkIcon fill="white" width="20px" height="100%" />
                    <div>{forks_count}</div>
                  </div>
                </div>
              </div>

              <div className="group-hover:text-blue-500">{description}</div>

              <div className="group-hover:text-blue-500">{formattedDate}</div>
            </div>
          </Link>
        );
      }),
    []
  );

  return (
    <div className="flex-col items-center justify-center p-4 h-fit w-2/3 gap-10">
      {getReposFields}
    </div>
  );
});

export default UserRepos;
