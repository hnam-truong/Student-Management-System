import { create } from "zustand";
import { IActivityLog } from "../interfaces/activity-log.interface";
import {
  getActivityLogsByStudentID,
  postAnActivityLog,
} from "../services/api/ApiCaller7";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
import {
  generateErrorMessage,
  generateSuccessMessage,
} from "../utils/GenerateErrorMessage";

interface IActivityLogStore {
  loading: boolean;
  activityLogs: IActivityLog[] | null;
  fetchActivityLogByStudentID: (id: string) => void;
}
export const useActivityLogStore = create<IActivityLogStore>((set) => ({
  loading: false,
  activityLogs: null,
  fetchActivityLogByStudentID: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getActivityLogsByStudentID({ id });
      set((state) => ({ ...state, activityLogs: data }));
    } catch (err) {
      console.log("API Error:", err);
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
interface ISingleActivityLogs {
  loadingActivityLog: boolean;
  anActivityLog: IActivityLog | null;
  postActivityLog: (data: IActivityLog) => void;
}
export const useSingleActivityLogStore = create<ISingleActivityLogs>((set) => ({
  loadingActivityLog: false,
  anActivityLog: null,
  postActivityLog: async (data: IActivityLog) => {
    set((state) => ({ ...state, loadingActivityLog: true }));
    try {
      await postAnActivityLog({ data });
      successNotify(generateSuccessMessage("has been sent", "Email remind"));
    } catch (error) {
      console.log("API Error:", error);
      errorNotify(generateErrorMessage("Send", "email remind"));
    } finally {
      set((state) => ({ ...state, loadingActivityLog: false }));
    }
  },
}));
