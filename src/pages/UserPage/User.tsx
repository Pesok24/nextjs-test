import { memo } from "react";
import { TUser } from "@/types/user.type";
import Image from "next/image";
import dayjs from "dayjs";

type TProps = Pick<
  TUser,
  "login" | "avatar_url" | "created" | "followers_count" | "following_count"
>;

const User = memo<TProps>(
  ({ login, created, followers_count, following_count, avatar_url }) => {
    const formattedDate = dayjs(created).format("DD-MM-YYYY");
    return (
      <div className="flex-col items-center justify-center border-2 p-4 border-white rounded-xl w-1/3 h-fit">
        <div className="flex justify-center">
          <Image
            loader={() => avatar_url + '&s=512'}
            src={avatar_url}
            alt=""
            width={220}
            height={220}
            quality={100}
            priority={true}
          />
        </div>

        <div className="text-center">{login}</div>
        <div className="flex gap-x-4 justify-center">
          <div>{followers_count} Подписчики</div>
          <div>{following_count} Подписки</div>
        </div>
        <div className="text-center">{`Joined on ${formattedDate}`}</div>
      </div>
    );
  }
);

User.displayName = 'User'

export default User;
