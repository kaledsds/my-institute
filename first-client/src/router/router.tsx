import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { HomePage } from "../pages/home/views";
import {
  PostCreatePage,
  PostDetailsPage,
  PostListPage,
  PostUpdatePage,
} from "../pages/posts/views";
import { AuthLoginPage, AuthRegisterPage } from "../pages/auth/views";
import {
  StudentCreatePage,
  StudentDetailsPage,
  StudentListPage,
  StudentUpdatePage,
} from "../pages/students/views";
import {
  SpecialiteCreatePage,
  SpecialiteDetailsPage,
  SpecialiteListPage,
  SpecialiteUpdatePage,
} from "../pages/specialites/views";
import {
  GroupeCreatePage,
  GroupeDetailsPage,
  GroupeListPage,
  GroupeUpdatePage,
} from "../pages/groupes/views";

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
      {
        path: "students",
        children: [
          {
            index: true,
            element: <StudentListPage />,
          },
          {
            path: "create",
            element: <StudentCreatePage />,
          },
          {
            path: "details/:id",
            element: <StudentDetailsPage />,
          },
          {
            path: "edit/:id",
            element: <StudentUpdatePage />,
          },
        ],
      },
      {
        path: "specialites",
        children: [
          {
            index: true,
            element: <SpecialiteListPage />,
          },
          {
            path: "create",
            element: <SpecialiteCreatePage />,
          },
          {
            path: "details/:id",
            element: <SpecialiteDetailsPage />,
          },
          {
            path: "edit/:id",
            element: <SpecialiteUpdatePage />,
          },
        ],
      },
      {
        path: "groupes",
        children: [
          {
            index: true,
            element: <GroupeListPage />,
          },
          {
            path: "create",
            element: <GroupeCreatePage />,
          },
          {
            path: "details/:id",
            element: <GroupeDetailsPage />,
          },
          {
            path: "edit/:id",
            element: <GroupeUpdatePage />,
          },
        ],
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
