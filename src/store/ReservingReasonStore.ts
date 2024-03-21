// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { IReservingReason } from "../interfaces/reserving-reason.interface";
import { getReservingReasons } from "../services/api/ApiCaller4";
import { errorNotify } from "../components/atoms/Notify/Notify";
import { generateErrorMessage } from "../utils/GenerateErrorMessage";

// RESERVING REASONS
interface IReservingReasonStore {
  reservingReason: IReservingReason[] | null;
  loading: boolean;
  fetchReservingReason: () => void;
}

const useReservingReason = create<IReservingReasonStore>((set) => ({
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
      errorNotify(generateErrorMessage("get", "reserving reason"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

export default useReservingReason;
