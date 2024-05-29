import { Home, LucideIcon, NotebookPen } from "lucide-react";

/**
 * Navigation configuration
 */
export interface NavigationConfig {
  id: string;
  name: string;
  path: string;
  icon?: LucideIcon;
}
export const navigationConfig = [
  {
    id: "home",
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    id: "posts",
    name: "Posts",
    path: "/posts",
    icon: NotebookPen,
  },
];
