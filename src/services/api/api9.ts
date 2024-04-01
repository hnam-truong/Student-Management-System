/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
// This function is handle get, post, put, del Mock API for auth (login - logout)
import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL_9 } from "../../constants/Api";

const api = axios.create({
  baseURL: BASE_URL_9,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error: AxiosError) => {
  console.error("Mock API request error:", error);
  throw error;
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const post = async <T>(
  url: string,
  data: unknown
): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.post<T>(url, data);
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error);
    }
    throw error;
  }
};
