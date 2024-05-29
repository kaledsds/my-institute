import { Outlet } from "react-router-dom";
import { Navbar } from "../components/blocs/navbar/navbar";
import { AuthGuard } from "./auth-guard";
import { Sidebar } from "../components/blocs/sidebar/sidebar";

export const AdminLayout = () => {
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
