import { create } from "zustand";
import {
  IClass,
  IClassStudent,
  IReservedStudent,
  IScore,
  IStudent,
} from "./Services/Interfaces & Types/Interfaces";
import { getScores, getStudents } from "./Services/GlobalFunctions/ApiCaller";
import {
  getClass,
  getReservedStudent,
} from "./Services/GlobalFunctions/ApiCaller2";
import { getClassStudent } from "./Services/GlobalFunctions/ApiCaller3";

// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

// STUDENT STORE
interface IStudentStore {
  student: IStudent[] | null;
  loading: boolean;
  fetchStudent: () => void;
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
}));

// SCORE STORE
interface IScoreStore {
  score: IScore[] | null;
  loading: boolean;
  fetchScore: () => void;
}

export const useScoreStore = create<IScoreStore>((set) => ({
  score: [],
  loading: false,
  fetchScore: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getScores();
      // Update scores when fetch successfully
      set((state) => ({ ...state, score: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

// RESERVED STUDENT STORE
interface IReservedStudentStore {
  reservedStudent: IReservedStudent[] | null;
  loading: boolean;
  fetchReservedStudent: () => void;
}

export const useReservedStudentStore = create<IReservedStudentStore>((set) => ({
  reservedStudent: [],
  loading: false,
  fetchReservedStudent: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getReservedStudent();
      // Update student when fetch successfully
      set((state) => ({ ...state, reservedStudent: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

// CLASS STORE
interface IClassStore {
  class: IClass[] | null;
  loading: boolean;
  fetchClass: () => void;
}

export const useClassStore = create<IClassStore>((set) => ({
  class: [],
  loading: false,
  fetchClass: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getClass();
      // Update student when fetch successfully
      set((state) => ({ ...state, class: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

// STUDENT IN CLASS STORE
interface IClassStudentStore {
  classStudent: IClassStudent[] | null;
  loading: boolean;
  fetchClassStudent: () => void;
}

export const useClassStudentStore = create<IClassStudentStore>((set) => ({
  classStudent: [],
  loading: false,
  fetchClassStudent: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getClassStudent();
      // Update student when fetch successfully
      set((state) => ({ ...state, classStudent: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
