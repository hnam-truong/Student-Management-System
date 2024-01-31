import { get } from "../Api/api";

import { IScore, IStudent } from "../Interfaces & Types/Interfaces";

//get all students
export const getStudents = async (): Promise<IStudent[]> => {
  try {
    const response = await get<IStudent[]>("students");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

//get all scores of all students
export const getScores = async (): Promise<IScore[]> => {
  try {
    const response = await get<IScore[]>("scores");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
