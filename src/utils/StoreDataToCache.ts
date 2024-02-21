import { IScore } from "../interfaces/score.interface";
import { IStudent } from "../interfaces/student.interface";

export const storeDataToCache = (data: IStudent[] | IScore[], name: string) => {
  try {
    sessionStorage.setItem(name, JSON.stringify(data));
    return 1;
  } catch (error) {
    return 0;
  }
};

export const getDataFromCache = (name: string): IStudent[] | IScore[] => {
  const dataCache = sessionStorage.getItem(name);
  const parseData = dataCache ? JSON.parse(dataCache) : null;
  return parseData;
};
