/**
 * Base api response
 */
export interface BaseResponse<T> {
  data: T;
  message?: string;
}
