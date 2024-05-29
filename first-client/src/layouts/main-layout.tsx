import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/blocs/navbar/navbar";
import { AuthGuard } from "./auth-guard";
import { Sidebar } from "../components/blocs/sidebar/sidebar";
import { useAuth } from "../models/auth/hooks";

export const MainLayout = () => {
  const { currentUser } = useAuth();
  if (currentUser?.category === "professeur") {
    return <Navigate to="/professeur" />;
  } else if (currentUser?.category === "personnel") {
    return <Navigate to="/personnel" />;
  } else if (currentUser?.category === "admin") {
    return <Navigate to="/admin" />;
  }
  return (
    <AuthGuard>
      <main className="flex">
        <Sidebar />
        <div className="h-screen flex-grow flex flex-col transition-all duration-300">
          <Navbar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </main>
    </AuthGuard>
  );
};
