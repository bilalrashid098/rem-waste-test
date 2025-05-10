import ax from "axios";
import type {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

/**
 * Axios instance configured with base URL and default headers.
 */
const axios = ax.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/**
 * Request Interceptor
 * - Adds token to headers if it exists
 * - Logs request details in development
 */
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (import.meta.env.DEV) {
      console.log(
        `[Request] ${config.method?.toUpperCase()} ${config.url}`,
        config
      );
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * - Logs response details
 * - Handles API and network errors globally
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (import.meta.env.DEV) {
      console.log("[Response]", response);
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        `[API Error] ${error.response.status}:`,
        error.response.data || error.message
      );
    } else {
      console.error("[Network Error]:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axios;
