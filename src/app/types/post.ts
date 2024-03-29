import { type Database } from "../types/database";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];
export type UserEntity = Database["public"]["Tables"]["users"]["Row"];

export type Post = PostEntity & {
  users: UserEntity;
};
