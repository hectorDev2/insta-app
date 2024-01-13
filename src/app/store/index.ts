import { create } from "zustand";

export const useStore = create((set) => ({
  posts: 0,
}));
