// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import {
  deleteSingleStudentInClass,
  getStudentClass,
  postStudentClass,
  postSingleStudentInClass,
} from "../services/api/ApiCaller3";
import { IStudentClass } from "../interfaces/student-class.interface";
import {
  generateErrorMessage,
  generateSuccessMessage,
} from "../utils/GenerateErrorMessage";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
// STUDENT IN CLASS STORE
interface IStudentClassStore {
  classStudent: IStudentClass[] | null;
  loading: boolean;
  fetchStudentClass: () => void;
  postStudentClass: (data: IStudentClass[]) => Promise<void>;
}

export const useStudentClassStore = create<IStudentClassStore>((set) => ({
  classStudent: [],
  loading: false,
  fetchStudentClass: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getStudentClass();
      // Update student when fetch successfully
      set((state) => ({ ...state, classStudent: data }));
    } catch (err) {
      console.error(err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  postStudentClass: async (data: IStudentClass[]) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postStudentClass({ data });
      successNotify(
        generateSuccessMessage("has been created", "Student information")
      );
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("create", "new student"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

interface ISingleClassStore {
  classStudent: IStudentClass | null;
  loading: boolean;
  deleteSingleStudentInClass: (id: string) => void;
  postSingleStudentInClass: (data: IStudentClass) => Promise<void>;
}

export const useSingleClassStore = create<ISingleClassStore>((set) => ({
  classStudent: null,
  loading: false,
  deleteSingleStudentInClass: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await deleteSingleStudentInClass({ id });
      successNotify(generateSuccessMessage("deleted", "The student"));
    } catch (error) {
      errorNotify(generateErrorMessage("delete", "the student"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
  postSingleStudentInClass: async (data: IStudentClass) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postSingleStudentInClass({ data });
      successNotify(
        generateSuccessMessage("has been created", "Student information")
      );
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("create", "new student"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
