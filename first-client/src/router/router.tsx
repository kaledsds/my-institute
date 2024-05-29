import { createBrowserRouter } from "react-router-dom";
import {
  AdminLayout,
  MainLayout,
  PersonnelLayout,
  ProfesseurLayout,
} from "../layouts";
import { HomePage } from "../pages/home/views";
import {
  PostCreatePage,
  PostDetailsPage,
  PostListPage,
  PostUpdatePage,
} from "../pages/posts/views";
import { AuthLoginPage, AuthRegisterPage } from "../pages/auth/views";
import { AdminDashboard } from "../pages/admin";
import { PersonnelDashboard } from "../pages/personnel/personnel.dashboard";
import { ProfessoeurDashboard } from "../pages/professeur";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <PostListPage />,
          },
          {
            path: "create",
            element: <PostCreatePage />,
          },
          {
            path: "details/:id",
            element: <PostDetailsPage />,
          },
          {
            path: "edit/:id",
            element: <PostUpdatePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/personnel",
    element: <PersonnelLayout />,
    children: [
      {
        index: true,
        element: <PersonnelDashboard />,
      },
    ],
  },
  {
    path: "/professeur",
    element: <ProfesseurLayout />,
    children: [
      {
        index: true,
        element: <ProfessoeurDashboard />,
      },
    ],
  },

  {
    path: "/register",
    element: <AuthRegisterPage />,
  },
  {
    path: "/login",
    element: <AuthLoginPage />,
  },
]);
