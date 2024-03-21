import { create } from "zustand";
import { IModuleScore } from "../interfaces/module-score";
import { errorNotify } from "../components/atoms/Notify/Notify";
import { generateErrorMessage } from "../utils/GenerateErrorMessage";
import { getModuleScores } from "../services/api/ApiCaller5";

interface ModuleScoreProps {
  moduleScore: IModuleScore[] | null;
  loading: boolean;
  fetchModuleScores: () => void;
}
const useModuleScoreStore = create<ModuleScoreProps>((set) => ({
  moduleScore: null,
  loading: false,
  fetchModuleScores: async () => {
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getModuleScores();
      set((state) => ({ ...state, moduleScore: data }));
    } catch (error) {
      console.log("API Error:", error);
      errorNotify(generateErrorMessage("get", "module scores"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

export default useModuleScoreStore;
