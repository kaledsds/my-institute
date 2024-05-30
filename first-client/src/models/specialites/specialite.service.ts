import { SpecialiteModel } from "./specialite.types";
import { _delete, _get, _post, _put } from "../../api/api.client";
import {
  UpdateSpecialiteSchemaType,
  CreateSpecialiteSchemaType,
} from "./specialite.validation";

/**
 * Post service keys
 */
export const GET_SPECIALITES_KEY = "GET_SPECIALITES_KEY";
export const GET_SPECIALITE_KEY = "GET_SPECIALITE_KEY";
/**
 * Get all resources
 */
export function getSpecialites() {
  return _get<SpecialiteModel[]>("/api/specialites");
}
/**
 * Get resources by id
 */
export function getSpecialitetById(studentId: string) {
  return _get<SpecialiteModel>(`/api/specialites/${studentId}`);
}
/**
 * Create resource
 */
export function createSpecialite(data: CreateSpecialiteSchemaType) {
  return _post<SpecialiteModel>("/api/specialites", data);
}
/**
 * Update resource
 */
export function updateSpecialite(
  studentId: string,
  data: UpdateSpecialiteSchemaType
) {
  return _put<SpecialiteModel>(`/api/specialites/${studentId}`, data);
}
/**
 * Delete resource
 */
export function deleteSpecialite(studentId: string) {
  return _delete(`/api/specialites/${studentId}`);
}
