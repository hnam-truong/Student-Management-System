/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { IActivityLog } from "../interfaces/activity-log.inteface";
import { IStudentClass } from "../interfaces/student-class.interface";
import { IClass } from "../interfaces/class.interface";
import { IEmail } from "../interfaces/email.interface";
import { IReservedStudent } from "../interfaces/reserved-student.interface";
import { IScore } from "../interfaces/score.interface";
import { IStudent } from "../interfaces/student.interface";
import { IUser } from "../interfaces/user.interface";

// This function is responsible for creating an array of filters list on the certain column of table in antd
export const generateFilters = (
  data:
    | IStudent[]
    | IScore[]
    | IReservedStudent[]
    | IStudentClass[]
    | IClass[]
    | IUser[]
    | IEmail[]
    | IActivityLog[],
  dataIndex: string
): { text: string; value: string }[] => {
  const filters: { text: string; value: string }[] = [];

  data.forEach((item) => {
    const value = (item as any)[dataIndex];
    if (!filters.some((filter) => filter.value === value)) {
      filters.push({ text: value, value });
    }
  });

  return filters;
};
