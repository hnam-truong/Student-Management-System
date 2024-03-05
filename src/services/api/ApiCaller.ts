import { del, get, post, put } from "./api";
import { IScore } from "../../interfaces/score.interface";
import { IStudent } from "../../interfaces/student.interface";

// get all students
export const getStudents = async (): Promise<IStudent[]> => {
  try {
    const response = await get<IStudent[]>("students");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get one student
interface GetStudentByIDProps {
  id: string;
}
export const getStudentByID = async ({
  id,
}: GetStudentByIDProps): Promise<IStudent[]> => {
  try {
    const response = await get<IStudent[]>(`students/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

interface PostStudentProps {
  data: IStudent[];
}
export const postStudent = async ({
  data,
}: PostStudentProps): Promise<IStudent[]> => {
  try {
    const response = await post<IStudent[]>(`students/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post one student
interface PostSingleStudentProps {
  data: IStudent;
}
export const postSingleStudent = async ({
  data,
}: PostSingleStudentProps): Promise<IStudent[]> => {
  try {
    const response = await post<IStudent[]>(`students/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// put one student
interface PutSingleStudentProps {
  id: string;
  data: IStudent;
}
export const putSingleStudent = async ({
  id,
  data,
}: PutSingleStudentProps): Promise<IStudent[]> => {
  try {
    const response = await put<IStudent[]>(`students/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// Delete one student
interface DeleteSingleStudentProps {
  id: string;
}
export const deleteSingleStudent = async ({
  id,
}: DeleteSingleStudentProps): Promise<IStudent[]> => {
  try {
    const response = await del<IStudent[]>(`students/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get all scores of all students
export const getScores = async (): Promise<IScore[]> => {
  try {
    const response = await get<IScore[]>("scores");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get all scores of 1 students
interface GetScoreByIDProps {
  id: string;
}
export const getScoreByID = async ({
  id,
}: GetScoreByIDProps): Promise<IScore[]> => {
  try {
    const response = await get<IScore[]>(`scores/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post new scores of student
interface PostScoreProps {
  data: IScore;
}
export const postScore = async ({ data }: PostScoreProps): Promise<IScore> => {
  try {
    const response = await post<IScore>(`scores/`, data);
    if (response.status === 201) {
      return response.data;
    }
    throw new Error(
      `Failed to post reserved student. Status: ${response.status}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

interface PutScoreProps {
  data: IScore;
  id: string;
}
export const putScore = async ({
  data,
  id,
}: PutScoreProps): Promise<IScore> => {
  try {
    const response = await put<IScore>(`scores/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(
      `Failed to post reserved student. Status: ${response.status}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
