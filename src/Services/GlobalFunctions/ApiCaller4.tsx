import { get } from "../Api/api4";
import {
  IReservingCondition,
  IReservingReason,
} from "../Interfaces & Types/Interfaces";

//get all reserving conditions
export const getReservingConditions = async (): Promise<
  IReservingCondition[]
> => {
  try {
    const response = await get<IReservingCondition[]>("reserving-conditions");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

//get all reserving reasons of reserved student
export const getReservingReasons = async (): Promise<IReservingReason[]> => {
  try {
    const response = await get<IReservingReason[]>("reserving-reasons");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
