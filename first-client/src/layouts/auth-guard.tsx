import React from "react";
import { useAuth } from "../models/auth/hooks";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  // const { currentUser } = useAuth();
  // if (currentUser?.category === null) {
  //   return <Navigate to="/" />;
  // }
  // if (currentUser?.category === "admin") {
  //   return <Navigate to="/admin" />;
  // }
  // if (currentUser?.category === "teacher") {
  //   return <Navigate to="/teacher" />;
  // }
  // if (currentUser?.category === "stuff") {
  //   return <Navigate to="/personnel" />;
  // }

  return isLoggedIn ? children : <Navigate to="/login" />;
};
