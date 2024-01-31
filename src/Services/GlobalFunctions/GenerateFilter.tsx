import { IClassStudent, IReservedStudent, IScore, IStudent } from "../Interfaces & Types/Interfaces";

//This function is responsible for creating an array of filters list on the certain column of table in antd
export const generateFilters = (
  data: IStudent[] | IScore[] | IReservedStudent[] | IClassStudent[],
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
