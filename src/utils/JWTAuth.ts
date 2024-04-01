/* eslint-disable no-param-reassign */
import { jwtDecode } from "jwt-decode";
import { convertDate } from "./TakeCurrentTime";

interface JwtDecodeI {
  uid: string;
  role: string;
  username: string;
  exp: number;
}

export const decodeToken = () => {
  const token = localStorage.getItem("token");
  let decodedToken;
  if (token) {
    decodedToken = jwtDecode<JwtDecodeI>(token);
  }
  try {
    console.log(decodedToken);
    if (decodedToken) {
      const { uid, role, username } = decodedToken;
      localStorage.setItem("id", uid);
      localStorage.setItem("role", role);
      localStorage.setItem("userName", username);
    }
    convertDate(decodedToken?.exp);
  } catch (error) {
    console.error("Error decoding token:", error);
  }
};

export const Authenticate = () => {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/dashboard";
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
