import { Menu } from "lucide-react";
import { Navigation, UserDropdown } from "./components";
import { useAuth } from "../../../models/auth/hooks";
import { useSideBarStore } from "../sidebar/sidebar.store";
import { Button } from "../../ui";

export const Navbar = () => {
  const { currentUser } = useAuth();
  const { onToggleSideBar } = useSideBarStore();

  return (
    <header className="navbar bg-base-100 px-2 border-b border-primary">
      <div className="navbar-start">
        {/* Side bar toggle */}
        <Button paint="ghost" shape="circle" onClick={onToggleSideBar}>
          <Menu className="w-5 h-5" />
        </Button>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Navigation */}
        <Navigation />
      </div>
      <div className="navbar-end">
        {/* User dropdown */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{currentUser?.name}</span>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};
