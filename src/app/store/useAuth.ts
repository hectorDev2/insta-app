import { create } from "zustand";
import { useAuthSupaBase } from "../hooks/useAuthSupaBase";

const [handleRegister, handleSignOut] = useAuthSupaBase();

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  signIn: () => {
    handleRegister();
  },
  signOut: () => {
    handleSignOut();

    set({ user: null });
  },
}));
