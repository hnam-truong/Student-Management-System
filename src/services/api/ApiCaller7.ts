import { del, get, post, put } from "./api7";
import { IEmail } from "../../interfaces/email.interface";

// get all emails
export const getEmails = async (): Promise<IEmail[]> => {
  try {
    const response = await get<IEmail[]>("emails");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post email
interface PostEmailProps {
  data: IEmail[];
}
export const postEmail = async ({
  data,
}: PostEmailProps): Promise<IEmail[]> => {
  try {
    const response = await post<IEmail[]>(`emails/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// SINGLE EMAIL
// get one email by its ID
interface GetEmailByIDProps {
  id: string;
}
export const getEmailByID = async ({
  id,
}: GetEmailByIDProps): Promise<IEmail[]> => {
  try {
    const response = await get<IEmail[]>(`emails/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post one email
interface PostSingleEmailProps {
  data: IEmail;
}
export const postSingleEmail = async ({
  data,
}: PostSingleEmailProps): Promise<IEmail[]> => {
  try {
    const response = await post<IEmail[]>(`emails/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// put one email
interface PutSingleEmailProps {
  id: string;
  data: IEmail;
}
export const putSingleEmail = async ({
  id,
  data,
}: PutSingleEmailProps): Promise<IEmail[]> => {
  try {
    const response = await put<IEmail[]>(`emails/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// delete one email
interface DeleteEmailProps {
  id: string;
}
export const deleteSingleEmail = async ({
  id,
}: DeleteEmailProps): Promise<IEmail[]> => {
  try {
    const response = await del<IEmail[]>(`emails/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
