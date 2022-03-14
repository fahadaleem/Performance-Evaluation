import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set: any) => ({
    auth: null,
    setAuth: (user: any) => set({ auth: user }),
  }))
);
