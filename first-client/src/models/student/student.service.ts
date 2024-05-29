import { StudentModel } from "./student.types";
import { _delete, _get, _post, _put } from "../../api/api.client";
import {
  CreatePostSchemaType,
  UpdatePostSchemaType,
} from "./student.validation";

/**
 * Post service keys
 */
export const GET_STUDENTS_KEY = "GET_STUDENTS_KEY";
export const GET_STUDENT_KEY = "GET_STUDENT_KEY";
/**
 * Get all resources
 */
export function getPosts() {
  return _get<StudentModel[]>("/api/students");
}
/**
 * Get resources by id
 */
export function getPostById(studentId: string) {
  return _get<StudentModel>(`/api/students/${studentId}`);
}
/**
 * Create resource
 */
export function createPost(data: CreatePostSchemaType) {
  return _post<StudentModel>("/api/students", data);
}
/**
 * Update resource
 */
export function updatePost(studentId: string, data: UpdatePostSchemaType) {
  return _put<StudentModel>(`/api/students/${studentId}`, data);
}
/**
 * Delete resource
 */
export function deletePost(studentId: string) {
  return _delete(`/api/students/${studentId}`);
}
