import { navigationConfig } from "../../../../router/navigation-config";
import { Link } from "../../../ui";

export const Navigation = () => {
  return (
    <ul className="menu menu-horizontal px-1 gap-2">
      {navigationConfig.map((nav) => (
        <li key={nav.id}>
          <Link paint="ghost" to={nav.path}>
            {nav.icon && <nav.icon className="w-4 h-4" />}
            <span>{nav.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
