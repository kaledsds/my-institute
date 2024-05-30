import { Home, LucideIcon, NotebookPen } from "lucide-react";
import { categoryEnum } from "../common/common.enums";

/**
 * Navigation configuration
 */
export interface NavigationConfig {
  id: string;
  name: string;
  path?: string;
  icon?: LucideIcon;
  allowedCategories?: categoryEnum[];
  subItems?: NavigationConfig[];
}
export const navigationConfig: NavigationConfig[] = [
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
    allowedCategories: [categoryEnum.PERSONNEL, categoryEnum.ADMIN],
    subItems: [
      {
        id: "sub_posts",
        name: "Sub posts",
        path: "/posts",
        icon: NotebookPen,
        allowedCategories: [categoryEnum.PERSONNEL, categoryEnum.ADMIN],
      },
    ],
  },
];
