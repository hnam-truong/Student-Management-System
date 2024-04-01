// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value
import { create } from "zustand";
import { IStudent } from "../interfaces/student.interface";
import {
  deleteSingleStudent,
  getStudentByID,
  getStudents,
  postSingleStudent,
  postStudent,
  putSingleStudent,
} from "../services/api/ApiCaller";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
import {
  generateErrorMessage,
  generateSuccessMessage,
} from "../utils/GenerateErrorMessage";

// STUDENT STORE
interface IStudentStore {
  student: IStudent[] | null;
  loading: boolean;
  fetchStudent: () => void;
  postStudent: (data: IStudent[]) => Promise<void>;
}

export const useStudentStore = create<IStudentStore>((set) => ({
  student: [],
  loading: false,
  fetchStudent: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getStudents();
      // Update student when fetch successfully
      set((state) => ({ ...state, student: data }));
    } catch (err) {
      console.error(err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  postStudent: async (data: IStudent[]) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postStudent({ data });
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

// SINGLE STUDENT STORE
interface ISingleStudentStore {
  aStudent: IStudent | null;
  newStudent: IStudent | null;
  loading: boolean;
  getStudentByID: (id: string) => void;
  postSingleStudent: (data: IStudent) => Promise<void>;
  putSingleStudent: (data: IStudent, id: string) => Promise<void>;
  deleteSingleStudent: (id: string) => Promise<void>;
}

export const useSingleStudentStore = create<ISingleStudentStore>((set) => ({
  aStudent: null,
  newStudent: null,
  loading: false,
  getStudentByID: async (id: string) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getStudentByID({ id });
      const validData: IStudent | null = Array.isArray(data) ? data[0] : data;
      // Update scores of student when fetch successfully
      set((state) => ({ ...state, aStudent: validData }));
    } catch (err) {
      // Catch & log error
      console.error(err);

      set((state) => ({ ...state, aStudent: null }));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },

  postSingleStudent: async (data: IStudent) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const response = await postSingleStudent({ data });
      const validData: IStudent | null = Array.isArray(response)
        ? response[0]
        : response;
      set((state) => ({ ...state, newStudent: validData }));
      successNotify(
        generateSuccessMessage("has been created", "Student information")
      );
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("create", "a new student"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  putSingleStudent: async (data: IStudent, id: string) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await putSingleStudent({ data, id });
      successNotify(
        generateSuccessMessage("has been saved", "Student information")
      );
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("edit", "the student"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  deleteSingleStudent: async (id: string) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await deleteSingleStudent({ id });
      successNotify(generateSuccessMessage("deleted", "The student was"));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("delete", "the student"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
