import { _get } from "../../api/api.client";
import { UserModel } from "./user.types";

/**
 * User service keys
 */
export const GET_CURRENT_USER_KEY = "GET_CURRENT_USER_KEY";
/**
 * Get current user
 */
export function getCurrentUser() {
  return _get<UserModel>("/api/user");
}
