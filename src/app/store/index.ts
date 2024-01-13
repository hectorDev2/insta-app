import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { create } from "zustand";
const supabase = createServerComponentClient({ cookies });

export const useStore = create((set) => ({
  posts: 0,
  fetchPosts: (posts: any) => {
    set({ posts });
  },
}));
