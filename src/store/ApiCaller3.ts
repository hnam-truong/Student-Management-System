/* eslint-disable import/prefer-default-export */
import { get } from "./api3";
import { IClassStudent } from "../interfaces/class-student.interface";

// get all students in specific class
export const getClassStudent = async (): Promise<IClassStudent[]> => {
  try {
    const response = await get<IClassStudent[]>("class100");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
