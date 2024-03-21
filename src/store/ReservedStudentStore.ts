// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { IReservedStudent } from "../interfaces/reserved-student.interface";
import {
  getReservedStudent,
  getReservedStudentByID,
  postReservedStudent,
  postReservedStudentByID,
  putSingleReserveStudent,
} from "../services/api/ApiCaller2";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
import {
  generateErrorMessage,
  generateSuccessMessage,
} from "../utils/GenerateErrorMessage";

// RESERVED STUDENT STORE
interface IReservedStudentStore {
  reservedStudent: IReservedStudent[] | null;
  loading: boolean;
  fetchReservedStudent: () => void;
  postReservedStudent: (data: IReservedStudent[]) => Promise<void>;
}

export const useReservedStudentStore = create<IReservedStudentStore>((set) => ({
  reservedStudent: [],
  loading: false,
  fetchReservedStudent: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getReservedStudent();
      // Update reserved students when fetch successfully
      set((state) => ({ ...state, reservedStudent: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("get", "list of reserved student"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  postReservedStudent: async (data: IReservedStudent[]) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postReservedStudent({ data });
      successNotify(
        generateSuccessMessage(
          "has been created",
          "Reserved Student information"
        )
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

// RESERVED STUDENT SINGLE STORE
interface IReservedStudentSingleStore {
  aReservedStudent: IReservedStudent | null;
  loading: boolean;
  fetchReservedStudentByID: (id: string) => void;
  postReservedStudent: (data: IReservedStudent) => Promise<void>;
  putReservedStudent: (id: string, data: IReservedStudent) => Promise<void>;
}

export const useReservedStudentSingleStore =
  create<IReservedStudentSingleStore>((set) => ({
    aReservedStudent: null,
    loading: false,
    fetchReservedStudentByID: async (id: string) => {
      // Set Loading true
      set((state) => ({ ...state, loading: true }));
      try {
        const data = await getReservedStudentByID({ id });
        const validData: IReservedStudent | null = Array.isArray(data)
          ? data[0]
          : data;
        // Update reserved student when fetch successfully
        set((state) => ({ ...state, aReservedStudent: validData }));
      } catch (err) {
        // Catch & log error
        console.log("API Error:", err);
        errorNotify(
          generateErrorMessage("get", "reserved student information")
        );
      } finally {
        // Set loading false
        set((state) => ({ ...state, loading: false }));
      }
    },
    postReservedStudent: async (data: IReservedStudent) => {
      // Set Loading true
      set((state) => ({ ...state, loading: true }));
      try {
        await postReservedStudentByID({ data });
        successNotify(
          generateSuccessMessage(
            "has been created",
            "Reserved student information"
          )
        );
      } catch (err) {
        // Catch & log error
        console.log("API Error:", err);
        errorNotify(generateErrorMessage("create", "a new reserved student"));
      } finally {
        // Set loading false
        set((state) => ({ ...state, loading: false }));
      }
    },
    putReservedStudent: async (id: string, data: IReservedStudent) => {
      set((state) => ({ ...state, loading: true }));
      try {
        await putSingleReserveStudent({ id, data });
        successNotify(
          generateSuccessMessage(
            "has been changed",
            "Reserved student information"
          )
        );
      } catch (err) {
        // Catch & log error
        console.log("API Error:", err);
        errorNotify(generateErrorMessage("edit", "the reserved student"));
      } finally {
        // Set loading false
        set((state) => ({ ...state, loading: false }));
      }
    },
  }));
