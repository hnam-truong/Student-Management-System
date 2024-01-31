import axios, { AxiosError, AxiosResponse } from "axios";
import { baseMockApiURL3, baseBackEndURL } from "./../Constants/ApiURL";

const api = axios.create({
  baseURL: baseBackEndURL !== "" ? baseBackEndURL : baseMockApiURL3,
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

export const post = async <T>(
  url: string,
  data: any
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

export const put = async <T>(
  url: string,
  data: any
): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.put<T>(url, data);
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error);
    }
    throw error;
  }
};

export const del = async <T>(url: string): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.delete<T>(url);
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error);
    }
    throw error;
  }
};
