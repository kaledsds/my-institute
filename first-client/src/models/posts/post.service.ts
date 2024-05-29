import { PostModel } from "./post.types";
import { _delete, _get, _post, _put } from "../../api/api.client";
import { CreatePostSchemaType, UpdatePostSchemaType } from "./post.validation";

/**
 * Post service keys
 */
export const GET_POSTS_KEY = "GET_POSTS_KEY";
export const GET_POST_KEY = "GET_POST_KEY";
/**
 * Get all resources
 */
export function getPosts() {
  return _get<PostModel[]>("/api/posts");
}
/**
 * Get resources by id
 */
export function getPostById(postId: string) {
  return _get<PostModel>(`/api/posts/${postId}`);
}
/**
 * Create resource
 */
export function createPost(data: CreatePostSchemaType) {
  return _post<PostModel>("/api/posts", data);
}
/**
 * Update resource
 */
export function updatePost(postId: string, data: UpdatePostSchemaType) {
  return _put<PostModel>(`/api/posts/${postId}`, data);
}
/**
 * Delete resource
 */
export function deletePost(postId: string) {
  return _delete(`/api/posts/${postId}`);
}
