/* eslint-disable import/prefer-default-export */
import { del, get, post } from "./api3";
import { IStudentClass } from "../../interfaces/student-class.interface";
// get all students in specific class
export const getStudentClass = async (): Promise<IStudentClass[]> => {
  try {
    const response = await get<IStudentClass[]>("/class100");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post class students
interface PostStudentClassProps {
  data: IStudentClass[];
}
export const postStudentClass = async ({
  data,
}: PostStudentClassProps): Promise<IStudentClass[]> => {
  try {
    const response = await post<IStudentClass[]>(`class100/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface DeleteSingleStudenInClassProps {
  id: string;
}
export const deleteSingleStudenInClass = async ({
  id,
}: DeleteSingleStudenInClassProps): Promise<IStudentClass[]> => {
  try {
    const response = await del<IStudentClass[]>(`/class100/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post one student
interface PostSingleStudentInClassProps {
  data: IStudentClass;
}
export const postSingleStudentInClass = async ({
  data,
}: PostSingleStudentInClassProps): Promise<IStudentClass[]> => {
  try {
    const response = await post<IStudentClass[]>(`class100/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
