/* eslint-disable import/prefer-default-export */
import { ILogin } from "../../interfaces/login.interface";
import { decodeToken } from "../../utils/JWTAuth";
import { post } from "./api9";

interface PostLoginProps {
  data: ILogin[];
}
export const postLogin = async ({
  data,
}: PostLoginProps): Promise<ILogin[]> => {
  try {
    const response = await post<ILogin>(`login/`, data);
    const token = response.data.accessToken;
    localStorage.setItem("token", token);
    decodeToken();
    if (localStorage.getItem("role") === "Admin") {
      window.location.href = "/dashboard";
      return [];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface PostLogoutProps {
  token: string;
}
export const postLogout = async ({
  token,
}: PostLogoutProps): Promise<PostLogoutProps[]> => {
  try {
    const response = await post<PostLogoutProps>(`logout/`, token);
    if (response.status === 200) {
      localStorage.clear();
      window.location.href = "/login";
      return [];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
