import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * Sidebar auth store
 */
interface SideBarState {
  isOpenSideBar: boolean;
  onToggleSideBar: () => void;
  onOpenSideBar: () => void;
  onCloseSideBar: () => void;
}
export const useSideBarStore = create<SideBarState>()(
  persist(
    (set) => ({
      isOpenSideBar: true,
      onToggleSideBar: () =>
        set((state) => ({ isOpenSideBar: !state.isOpenSideBar })),
      onOpenSideBar: () => set(() => ({ isOpenSideBar: true })),
      onCloseSideBar: () => set(() => ({ isOpenSideBar: false })),
    }),
    {
      name: "sidebar-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
