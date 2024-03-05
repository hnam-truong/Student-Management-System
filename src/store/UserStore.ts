// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";
import {
  deleteSingleUser,
  getUsers,
  getUsersById,
  postSingleUser,
  putSingleUser,
} from "../services/api/ApiCaller5";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
import {
  generateErrorMessage,
  generateSuccessMessage,
} from "../utils/GenerateErrorMessage";

interface IUserStore {
  user: IUser[] | null;
  loading: boolean;
  fetchUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: [],
  loading: false,
  fetchUser: async () => {
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getUsers();
      set((state) => ({ ...state, user: data }));
    } catch (error) {
      errorNotify(generateErrorMessage("get", "list of user"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

interface ISingleUserStore {
  aUser: IUser | null;
  loading: boolean;
  getUserByID: (id: string) => void;
  postSingleUser: (data: IUser) => Promise<void>;
  putSingleUser: (data: IUser, id: string) => Promise<void>;
  deleteSingleUser: (id: string) => Promise<void>;
}
export const useSingleUserStore = create<ISingleUserStore>((set) => ({
  aUser: null,
  loading: false,
  getUserByID: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getUsersById({ id });
      const validData: IUser | null = Array.isArray(data) ? data[0] : data;
      set((state) => ({ ...state, aUser: validData }));
    } catch (error) {
      errorNotify(generateErrorMessage("get", "user information"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
  postSingleUser: async (data: IUser) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await postSingleUser({ data });
      successNotify(
        generateSuccessMessage("has been saved", "User information")
      );
    } catch (error) {
      errorNotify(generateErrorMessage("create", "a new user"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
  putSingleUser: async (data: IUser, id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await putSingleUser({ data, id });
      successNotify(
        generateSuccessMessage("has been changed", "User information")
      );
    } catch (error) {
      errorNotify(generateErrorMessage("delete", "the user"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
  deleteSingleUser: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await deleteSingleUser({ id });
      successNotify(generateSuccessMessage("deleted", "User was"));
    } catch (error) {
      errorNotify(generateErrorMessage("edit", "the user"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
