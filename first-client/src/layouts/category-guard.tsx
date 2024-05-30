import { useNavigate } from "react-router-dom";
import { categoryEnum } from "../common/common.enums";
import { useAuth } from "../models/auth/hooks";

interface CategoryGuardProps {
  children: React.ReactNode;
  allwedCategories?: categoryEnum[];
  redirect?: string;
}

export const CategoryGuard: React.FC<CategoryGuardProps> = ({
  allwedCategories,
  redirect,
  children,
}) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (allwedCategories) {
    if (
      !allwedCategories.includes((currentUser?.category || "") as categoryEnum)
    ) {
      if (redirect) {
        navigate(redirect);
      } else {
        return null;
      }
    }
  }

  return <>{children}</>;
};
