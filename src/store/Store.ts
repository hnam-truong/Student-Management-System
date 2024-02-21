import { create } from "zustand";
import { IStudent } from "../interfaces/student.interface";
import { IScore } from "../interfaces/score.interface";
import { IReservingReason } from "../interfaces/reserving-reason.interface";
import { IReservingCondition } from "../interfaces/reserving-condition.interface";
import { IReservedStudent } from "../interfaces/reserved-student.interface";
import { IClass } from "../interfaces/class.interface";
import { IClassStudent } from "../interfaces/class-student.interface";
import {
  deleteSingleStudent,
  getScoreByID,
  getScores,
  getStudentByID,
  getStudents,
  postScore,
  postSingleStudent,
  putScore,
  putSingleStudent,
} from "./ApiCaller";
import {
  getClass,
  getReservedStudent,
  getReservedStudentByID,
  postReservedStudentByID,
} from "./ApiCaller2";
import { getClassStudent } from "./ApiCaller3";
import { getReservingConditions, getReservingReasons } from "./ApiCaller4";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";

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

// SINGLE SCORE OF A STUDENT STORE
interface ISingleScoreStore {
  aScore: IScore | null;
  loading: boolean;
  getStudentScoreByID: (id: string) => void;
  postStudentScore: (data: IScore) => Promise<void>;
  putStudentScore: (data: IScore, id: string) => Promise<void>;
}

export const useSingleScoreStore = create<ISingleScoreStore>((set) => ({
  aScore: null,
  loading: false,
  getStudentScoreByID: async (id: string) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getScoreByID({ id });
      const validData: IScore | null = Array.isArray(data) ? data[0] : data;
      // Update scores of student when fetch successfully
      set((state) => ({ ...state, aScore: validData }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },

  postStudentScore: async (data: IScore) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postScore({ data });
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
  putStudentScore: async (data: IScore, id: string) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await putScore({ data, id });
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
  postReservedStudent: (data: IReservedStudent) => Promise<void>;
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
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
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

// RESERVING REASONS
interface IReservingReasonStore {
  reservingReason: IReservingReason[] | null;
  loading: boolean;
  fetchReservingReason: () => void;
}

export const useReservingReason = create<IReservingReasonStore>((set) => ({
  reservingReason: [],
  loading: false,
  fetchReservingReason: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getReservingReasons();
      // Update reserving reasons when fetch successfully
      set((state) => ({ ...state, reservingReason: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

// RESERVING REASONS
interface IReservingConditionStore {
  reservingCondition: IReservingCondition[] | null;
  loading: boolean;
  fetchReservingCondition: () => void;
}

export const useReservingCondition = create<IReservingConditionStore>(
  (set) => ({
    reservingCondition: [],
    loading: false,
    fetchReservingCondition: async () => {
      // Set Loading true
      set((state) => ({ ...state, loading: true }));
      try {
        const data = await getReservingConditions();
        // Update reserving conditions when fetch successfully
        set((state) => ({ ...state, reservingCondition: data }));
      } catch (err) {
        // Catch & log error
        console.log("API Error:", err);
      } finally {
        // Set loading false
        set((state) => ({ ...state, loading: false }));
      }
    },
  })
);
