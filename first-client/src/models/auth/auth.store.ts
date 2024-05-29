import { create } from "zustand";
import { UserModel } from "../user/user.types";
import { getCurrentUser } from "../user/user.service";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * Session auth store
 */
interface AuthState {
  isLoggedIn: boolean;
  currentUser?: UserModel;
  onAuthSignSuccess: () => Promise<void>;
  onAuthSignOut: () => void;
}
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      onAuthSignSuccess: async () => {
        try {
          const currentUserRes = await getCurrentUser();
          if (currentUserRes?.data) {
            set(() => ({ isLoggedIn: true, currentUser: currentUserRes.data }));
          }
        } catch (e) {
          console.log(e);
        }
      },
      onAuthSignOut: () =>
        set(() => ({ isLoggedIn: false, currentUser: undefined })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
