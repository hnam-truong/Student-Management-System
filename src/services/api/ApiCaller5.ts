import { IUser } from "../../interfaces/user.interface";
import { get, post, del, put } from "./api5";

// get all users
export const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await get<IUser[]>("users");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface GetUsersByIdProps {
  id: string;
}
// get a user by Id
export const getUsersById = async ({
  id,
}: GetUsersByIdProps): Promise<IUser[]> => {
  try {
    const response = await get<IUser[]>(`users/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
interface GetUserByEmailProps {
  email: string;
}
// get user by Email
export const getUserByEmail = async ({
  email,
}: GetUserByEmailProps): Promise<IUser[]> => {
  try {
    const response = await get<IUser[]>(`?Email=${email}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface PostSingleUserProps {
  data: IUser;
}

// post a user

export const postSingleUser = async ({
  data,
}: PostSingleUserProps): Promise<IUser[]> => {
  try {
    const response = await post<IUser[]>(`users/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface PutSingleUserProps {
  id: string;
  data: IUser;
}

// put a user
export const putSingleUser = async ({
  id,
  data,
}: PutSingleUserProps): Promise<IUser[]> => {
  try {
    const response = await put<IUser[]>(`users/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface DeleteSingleUserProps {
  id: string;
}
// delete single user
export const deleteSingleUser = async ({
  id,
}: DeleteSingleUserProps): Promise<IUser[]> => {
  try {
    const response = await del<IUser[]>(`users/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
