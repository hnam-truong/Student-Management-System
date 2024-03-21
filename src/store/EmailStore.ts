// NOTE:
// 1: define interfaces/type for store
// 2: create store with the correct type/interface
// 3: use (state) => state.<state name> to access the current state value
// 4: use set(newState) to update state value

import { create } from "zustand";
import { IEmail } from "../interfaces/email.interface";
import {
  getEmails,
  postEmail,
  getEmailByID,
  postSingleEmail,
  putSingleEmail,
  deleteSingleEmail,
} from "../services/api/ApiCaller7";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
import {
  generateErrorMessage,
  generateSuccessMessage,
} from "../utils/GenerateErrorMessage";

// EMAIL STORE
interface IEmailStore {
  email: IEmail[] | null;
  loading: boolean;
  getEmail: () => void;
  postEmail: (data: IEmail[]) => Promise<void>;
}

export const useEmailStore = create<IEmailStore>((set) => ({
  email: [],
  loading: false,
  getEmail: async () => {
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getEmails();
      set((state) => ({ ...state, email: data }));
    } catch (error) {
      errorNotify(generateErrorMessage("get", "list of email template"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  postEmail: async (data: IEmail[]) => {
    // Set Loading true
    set((state) => ({ ...state, loading: true }));
    try {
      await postEmail({ data });
      successNotify(
        generateSuccessMessage("has been created", "Email template information")
      );
    } catch (err) {
      // Catch & log error
      console.log("API Error:", err);
      errorNotify(generateErrorMessage("create", "new email template"));
    } finally {
      // Set loading false
      set((state) => ({ ...state, loading: false }));
    }
  },
}));

// EMAIL SINGLE STORE
interface ISingleEmailStore {
  aEmail: IEmail | null;
  loading: boolean;
  getEmailByID: (id: string) => void;
  postSingleEmail: (data: IEmail) => Promise<void>;
  putSingleEmail: (data: IEmail, id: string) => Promise<void>;
  deleteSingleEmail: (id: string) => Promise<void>;
}
export const useSingleEmailStore = create<ISingleEmailStore>((set) => ({
  aEmail: null,
  loading: false,
  getEmailByID: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const data = await getEmailByID({ id });
      const validData: IEmail | null = Array.isArray(data) ? data[0] : data;
      set((state) => ({ ...state, aEmail: validData }));
    } catch (error) {
      errorNotify(generateErrorMessage("get", "email template information"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  postSingleEmail: async (data: IEmail) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await postSingleEmail({ data });
      successNotify(
        generateSuccessMessage("has been created", "Email template information")
      );
    } catch (error) {
      errorNotify(generateErrorMessage("create", "a new email template"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  putSingleEmail: async (data: IEmail, id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await putSingleEmail({ data, id });
      successNotify(
        generateSuccessMessage("has been changed", "Email template information")
      );
    } catch (error) {
      errorNotify(generateErrorMessage("edit", "the email template"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  deleteSingleEmail: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      await deleteSingleEmail({ id });
      successNotify(
        generateSuccessMessage("deleted", "The email template was")
      );
    } catch (error) {
      errorNotify(generateErrorMessage("delete", "the email template"));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
