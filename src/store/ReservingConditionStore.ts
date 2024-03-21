// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { getReservingConditions } from "../services/api/ApiCaller4";
import { IReservingCondition } from "../interfaces/reserving-condition.interface";
import { errorNotify } from "../components/atoms/Notify/Notify";
import { generateErrorMessage } from "../utils/GenerateErrorMessage";
// RESERVING REASONS
interface IReservingConditionStore {
  reservingCondition: IReservingCondition[] | null;
  loading: boolean;
  fetchReservingCondition: () => void;
}

const useReservingCondition = create<IReservingConditionStore>((set) => ({
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
      errorNotify(generateErrorMessage("get", "reserving condition"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

export default useReservingCondition;
