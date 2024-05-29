import { cn } from "../../../common/utils/cn";
import { Link } from "../../ui";
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
      {/* sidebar appearing animation */}
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
      </div>
    </aside>
  );
};
