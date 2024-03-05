// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { getClassStudent } from "../services/api/ApiCaller3";
import { IClassStudent } from "../interfaces/class-student.interface";
// STUDENT IN CLASS STORE
interface IClassStudentStore {
  classStudent: IClassStudent[] | null;
  loading: boolean;
  fetchClassStudent: () => void;
}

const useClassStudentStore = create<IClassStudentStore>((set) => ({
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
export default useClassStudentStore;
