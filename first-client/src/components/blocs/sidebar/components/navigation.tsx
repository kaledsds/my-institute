import { Link } from "react-router-dom";
import { CategoryGuard } from "../../../../layouts";
import { NavigationConfig } from "../../../../router/navigation-config";

interface NavigationProps {
  navItems: NavigationConfig[];
}

export const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  return (
    <ul className="menu px-1 gap-2">
      {navItems.map((nav) => (
        <li key={nav.id}>
          <CategoryGuard allwedCategories={nav?.allowedCategories}>
            {nav?.subItems ? (
              <details open>
                <summary>
                  {nav.icon && <nav.icon className="w-4 h-4" />}
                  <span>{nav.name}</span>
                </summary>
                <Navigation navItems={nav.subItems} />
              </details>
            ) : (
              <Link to={nav.path || "/"} className="w-full">
                {nav.icon && <nav.icon className="w-4 h-4" />}
                <span>{nav.name}</span>
              </Link>
            )}
          </CategoryGuard>
        </li>
      ))}
    </ul>
  );
};
