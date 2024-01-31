import { get } from "../Api/api2";
import { IClass, IReservedStudent } from "../Interfaces & Types/Interfaces";

//get all reserved students
export const getReservedStudent = async (): Promise<IReservedStudent[]> => {
  try {
    const response = await get<IReservedStudent[]>("reserved-students");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

//get all class
export const getClass = async (): Promise<IClass[]> => {
  try {
    const response = await get<IClass[]>("classes");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
