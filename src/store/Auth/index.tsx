import { AppConfig } from "@/constant/env";
import { UserData } from "@/store/Auth/interface.auth";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';


interface AuthState {
  isLoggedIn?: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
  token?: string;
  setToken?: (token: string) => void;
  user?: UserData,
  setUserData?: (user: UserData) => void;
  reset?: () => void;
}

const initialState: AuthState = {
  token: '',
  user: {} as any,
  isLoggedIn: false,
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,

      setIsLoggedIn: (isLoggedIn: boolean): void => {
        set({ isLoggedIn });
      },


      setToken: (token: string): void => {
        set({ token });
      },

      setUserData: (user: UserData): void => {
        set({ user });
      },
      reset: () => {
        set(initialState);
      },

    }),
    {
      name: AppConfig.PERSIST_SECRET_KEY,
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);


export default useAuthStore;
