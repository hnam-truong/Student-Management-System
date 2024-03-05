// This function is handle get Mock API for provinces

import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL_6 } from "../../constants/Api";

const api = axios.create({
  baseURL: BASE_URL_6,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error: AxiosError) => {
  console.error("Mock API request error:", error);
  throw error;
};

export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.get<T>(url);
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error);
    }
    throw error;
  }
};

export default get;
