import { useMutation } from "@tanstack/react-query";
import { login, logout, register, sanctumCsrfCookie } from "../auth.service";
import { useNavigate } from "react-router-dom";
import {
  LoginUserSchemaType,
  RegisterUserSchemaType,
} from "../auth.validation";
import { useAuthStore } from "../auth.store";

export function useAuth() {
  const navigate = useNavigate();
  const { onAuthSignSuccess, onAuthSignOut, isLoggedIn, currentUser } =
    useAuthStore();
  /**
   * Sign up
   */
  const registerMutation = useMutation({
    mutationFn: (data: RegisterUserSchemaType) => register(data),
    onSuccess: async () => {
      await onAuthSignSuccess();
      navigate("/");
    },
  });
  const signUp = async (data: RegisterUserSchemaType) => {
    await sanctumCsrfCookie();
    registerMutation.mutate(data);
  };
  /**
   * Sign up
   */
  const loginMutation = useMutation({
    mutationFn: (data: LoginUserSchemaType) => login(data),
    onSuccess: async () => {
      await onAuthSignSuccess();
      navigate("/");
    },
  });
  const signIn = async (data: LoginUserSchemaType) => {
    await sanctumCsrfCookie();
    loginMutation.mutate(data);
  };
  /**
   * Sign out
   */
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login");
      onAuthSignOut();
    },
  });

  return {
    signUp,
    signUpStatus: registerMutation.status,
    signIn,
    signInStatus: loginMutation.status,
    signOut: () => logoutMutation.mutate(),
    signOutStatus: logoutMutation.status,
    currentUser: currentUser,
    isLoggedIn,
  };
}
