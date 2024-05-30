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
export function getGroupes() {
  return _get<GroupeModel[]>("/api/groupes");
}
/**
 * Get resources by id
 */
export function getGroupeById(studentId: string) {
  return _get<GroupeModel>(`/api/groupes/${studentId}`);
}
/**
 * Create resource
 */
export function createGroupe(data: CreateGroupeSchemaType) {
  return _post<GroupeModel>("/api/groupes", data);
}
/**
 * Update resource
 */
export function updateGroupe(studentId: string, data: UpdateGroupeSchemaType) {
  return _put<GroupeModel>(`/api/groupes/${studentId}`, data);
}
/**
 * Delete resource
 */
export function deleteGroupe(studentId: string) {
  return _delete(`/api/groupes/${studentId}`);
}
