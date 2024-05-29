import axios, { AxiosRequestConfig } from "axios";
import { BaseResponse } from "./api.types";

/**
 * Base api url
 */
const BASE_URL = import.meta.env.VITE_BASE_API || "http://localhost:8000";
/**
 * Base api client instence
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
});
/**
 * Interfceptors
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status || 500;
    if (status === 401) {
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);
/**
 * API Methods
 */
async function _get<T>(url: string, config: AxiosRequestConfig = {}) {
  const axiosRes = await apiClient.get<BaseResponse<T>>(url, config);
  return axiosRes.data;
}
async function _post<T>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
) {
  return apiClient.post<BaseResponse<T>>(url, data, config);
}
async function _put<T>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
) {
  return apiClient.put<BaseResponse<T>>(url, data, config);
}
async function _delete(url: string, config: AxiosRequestConfig = {}) {
  return apiClient.delete<BaseResponse<undefined>>(url, config);
}
export { _get, _delete, _put, _post };
