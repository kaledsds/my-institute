import { GroupeModel } from "./groupe.types";
import { _delete, _get, _post, _put } from "../../api/api.client";
import {
  CreateGroupeSchemaType,
  UpdateGroupeSchemaType,
} from "./groupe.validation";

/**
 * Post service keys
 */
export const GET_GROUPES_KEY = "GET_GROUPES_KEY";
export const GET_GROUPE_KEY = "GET_GROUPE_KEY";
/**
 * Get all resources
 */
export function getPosts() {
  return _get<GroupeModel[]>("/api/groupes");
}
/**
 * Get resources by id
 */
export function getPostById(studentId: string) {
  return _get<GroupeModel>(`/api/groupes/${studentId}`);
}
/**
 * Create resource
 */
export function createPost(data: CreateGroupeSchemaType) {
  return _post<GroupeModel>("/api/groupes", data);
}
/**
 * Update resource
 */
export function updatePost(studentId: string, data: UpdateGroupeSchemaType) {
  return _put<GroupeModel>(`/api/groupes/${studentId}`, data);
}
/**
 * Delete resource
 */
export function deletePost(studentId: string) {
  return _delete(`/api/groupes/${studentId}`);
}
