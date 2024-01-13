import { create } from "zustand";
import { useAuthSupaBase } from "../hooks/useAuthSupaBase";

const [handleRegister, handleSignOut] = useAuthSupaBase();

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  signIn: () => {
    console.log("registe");

    handleRegister();
  },
  signOut: () => {
    console.log("salir");
    handleSignOut();

    set({ user: null });
  },
}));
