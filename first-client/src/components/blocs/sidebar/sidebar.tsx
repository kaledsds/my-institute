import { cn } from "../../../common/utils/cn";
import { navigationConfig } from "../../../router/navigation-config";
import { Link } from "../../ui";
import { Navigation } from "./components";
import { useSideBarStore } from "./sidebar.store";

export const Sidebar = () => {
  const { isOpenSideBar } = useSideBarStore();
  return (
    <aside
      className={cn(
        "h-screen shadow-md transition-all duration-300",
        isOpenSideBar ? "w-[13vw]" : "w-0"
      )}
    >
      <div
        className={cn(
          "w-full p-2 transition-all delay-300",
          isOpenSideBar ? "block" : "hidden"
        )}
      >
        {/* App logo */}
        <Link to="/" paint="ghost" size="md" className="text-lg w-full">
          KDAPP
        </Link>
        {/* Navigation */}
        <Navigation navItems={navigationConfig} />
      </div>
    </aside>
  );
};
