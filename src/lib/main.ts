import axios, { AxiosInstance } from "axios";

/**
 * Create an axios instance for the API
 * @type {AxiosInstance}
 */
export const instanceApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
});
