export type TUser = {
    id: number;
    login: string;
    login_name: string;
    full_name: string;
    email: string;
    avatar_url: string;
    language: string;
    is_admin: boolean;
    last_login: string;
    created: string;
    restricted: boolean;
    active: boolean;
    prohibit_login: boolean;
    location: string;
    website: string;
    description: string;
    visibility: string;
    followers_count: number;
    following_count: number;
    starred_repos_count: number;
    username: string;
};

export type TUserRepos = {
  "name": string,
  "full_name": string,
  "description": string,
  "language": string,
  "updated_at": string,
  "stars_count": number,
  "forks_count": number,
}

