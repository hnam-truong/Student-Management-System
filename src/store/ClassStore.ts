// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { IClass } from "../interfaces/class.interface";
import {
  getClass,
  getClassByID,
  getClassesByName,
} from "../services/api/ApiCaller2";
import { errorNotify } from "../components/atoms/Notify/Notify";
import { generateErrorMessage } from "../utils/GenerateErrorMessage";

// CLASS STORE
interface IClassStore {
  classes: IClass[] | null;
  loading: boolean;
  fetchClass: () => void;
  getClassesByName: (className: string) => void;
}

export const useClassStore = create<IClassStore>((set) => ({
  classes: [],
  loading: false,
  fetchClass: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getClass();
      // Update student when fetch successfully
      set((state) => ({ ...state, classes: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("get", "list of class"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  getClassesByName: async (className) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const response: IClass[] = await getClassesByName({ className });
      const data: IClass[] = response.filter(
        (classItem) =>
          classItem.Status === "Opening" || classItem.Status === "Planning"
      );
      set((state) => ({ ...state, classes: data }));
    } catch (error) {
      console.log("API Error:", error);
      errorNotify(generateErrorMessage("get", "class information"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

// SINGLE CLASS STORE
interface ISingleClassStore {
  aClass: IClass | null;
  loading: boolean;
  getClassByID: (id: string) => void;
}
export const useSingleClassStore = create<ISingleClassStore>((set) => ({
  aClass: null,
  loading: false,
  getClassByID: async (id: string) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getClassByID({ id });
      // Update class when fetch successfully
      const validData: IClass | null = Array.isArray(data) ? data[0] : data;
      set((state) => ({ ...state, aClass: validData }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("get", "class information"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
