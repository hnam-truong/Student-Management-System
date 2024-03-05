// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { IScore } from "../interfaces/score.interface";
import {
  getScoreByID,
  getScores,
  postScore,
  putScore,
} from "../services/api/ApiCaller";

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
