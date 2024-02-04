import { post } from "../Api/api2";
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

//get reserved student by id
interface getReservedStudentByIDProps {
  id: string;
}
export const getReservedStudentByID = async ({
  id,
}: getReservedStudentByIDProps): Promise<IReservedStudent[]> => {
  try {
    const response = await get<IReservedStudent[]>(`reserved-students/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

//post new reserved student
interface postReservedStudentByIDProps {
  data: IReservedStudent;
}
export const postReservedStudentByID = async ({
  data,
}: postReservedStudentByIDProps): Promise<IReservedStudent> => {
  try {
    const response = await post<IReservedStudent>(`reserved-students/`, data);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(
        `Failed to post reserved student. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
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
