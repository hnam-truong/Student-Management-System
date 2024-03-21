import { IActivityLog } from "../../interfaces/activity-log.inteface";
import { get, post } from "./api8";

export const getActivityLogs = async (): Promise<IActivityLog[]> => {
  try {
    const response = await get<IActivityLog[]>(`activity-logs`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface GetActivityLogsByStudentIDProps {
  id: string;
}
export const getActivityLogsByStudentID = async ({
  id,
}: GetActivityLogsByStudentIDProps): Promise<IActivityLog[]> => {
  try {
    const response = await get<IActivityLog[]>(`activity-logs?Receiver=${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
interface PostAnActivityLog {
  data: IActivityLog;
}
export const postAnActivityLog = async ({
  data,
}: PostAnActivityLog): Promise<IActivityLog[]> => {
  try {
    const response = await post<IActivityLog[]>(`activity-logs`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
