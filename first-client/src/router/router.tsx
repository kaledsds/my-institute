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
    path: "/register",
    element: <AuthRegisterPage />,
  },
  {
    path: "/login",
    element: <AuthLoginPage />,
  },
]);
