import { get } from "../Api/api3";
import { IClassStudent } from "../Interfaces & Types/Interfaces";

//get all students in specific class
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
