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

// STUDENT STORE
interface IStudentStore {
  student: IStudent[] | null;
  loading: boolean;
  fetchStudent: () => void;
  postStudent: (data: IStudent[]) => Promise<void>;
  updateStudent: (data: IStudent) => void;
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
      // Catch & log error
      console.log("API Error:", err);
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
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  updateStudent: (data: IStudent) => {
    set((state) => {
      const updatedStudents =
        state.student?.map((student) =>
          student.ID === data.ID ? { ...student, ...data } : student
        ) ?? [];

      return {
        ...state,
        student: updatedStudents,
      };
    });
  },
}));

// SINGLE STUDENT STORE
interface ISingleStudentStore {
  aStudent: IStudent | null;
  loading: boolean;
  getStudentByID: (id: string) => void;
  postSingleStudent: (data: IStudent) => Promise<void>;
  putSingleStudent: (data: IStudent, id: string) => Promise<void>;
  deleteSingleStudent: (id: string) => Promise<void>;
}

export const useSingleStudentStore = create<ISingleStudentStore>((set) => ({
  aStudent: null,
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
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },

  postSingleStudent: async (data: IStudent) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postSingleStudent({ data });
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
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
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
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
      successNotify("Student deleted successfully!");
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify("Failed to delete the student. Please try again later.");
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
