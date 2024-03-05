import { get } from "./api4";
import { IReservingReason } from "../../interfaces/reserving-reason.interface";
import { IReservingCondition } from "../../interfaces/reserving-condition.interface";
// get all reserving conditions
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

// get all reserving reasons of reserved student
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
