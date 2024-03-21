// import { IProvince } from "./../interfaces/province.interface";
// import { create } from "zustand";
// import _ from "lodash";
// import { getProvinces } from "../services/api/ApiCaller6";

// interface IProvinceStore {
//   locationOptions: string[];
//   fetchProvinces: () => void;
// }

// export const useProvinceStore = create<IProvinceStore>((set) => {
//   const fetchProvincesDebounced = _.debounce(async () => {
//     try {
//       const provinces = await getProvinces();
//       set({
//         locationOptions: provinces.map((province) => province.name),
//       });
//     } catch (err) {
//       // Catch & log error
//       console.log("API Error:", err);
//     }
//   }, 500); // Adjust the debounce delay as needed

//   return {
//     locationOptions: [],
//     fetchProvinces: fetchProvincesDebounced,
//   };
// });

//

// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value
import { create } from "zustand";
import { IProvince } from "../interfaces/province.interface";
import getLocationProvinces from "../services/api/ApiCaller6";
import { generateErrorMessage } from "../utils/GenerateErrorMessage";
import { errorNotify } from "../components/atoms/Notify/Notify";

// STUDENT STORE
interface IProvinceStore {
  province: IProvince[] | null;
  loading: boolean;
  fetchProvinces: () => void;
}

export const useProvinceStore = create<IProvinceStore>((set) => ({
  province: [],
  loading: false,
  fetchProvinces: async () => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getLocationProvinces();
      // Update province when fetch successfully
      set((state) => ({ ...state, province: data }));
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("get", "list of province"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

export default useProvinceStore;
