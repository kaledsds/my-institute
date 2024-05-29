import { _get, _post } from "../../api/api.client";
import { LoginUserSchemaType, RegisterUserSchemaType } from "./auth.validation";

/**
 * Auth service keys
 */
export const GET_SANCTUM_CSRF_COOKIE_KEY = "GET_SANCTUM_CSRF_COOKIE_KEY";
/**
 * Login user
 */
export function sanctumCsrfCookie() {
  return _get<null>("/sanctum/csrf-cookie");
}
/**
 * Register user
 */
export function register(data: RegisterUserSchemaType) {
  return _post<null>("/register", data);
}
/**
 * Login user
 */
export function login(data: LoginUserSchemaType) {
  return _post<null>("/login", data);
}
/**
 * Login user
 */
export function logout() {
  return _post<null>("/logout");
}
