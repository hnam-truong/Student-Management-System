import { post, get, put } from "./api2";
import { IClass } from "../../interfaces/class.interface";
import { IReservedStudent } from "../../interfaces/reserved-student.interface";

// get all reserved students
export const getReservedStudent = async (): Promise<IReservedStudent[]> => {
  try {
    const response = await get<IReservedStudent[]>("reserved-students");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post reserved students
interface PostReservedStudentProps {
  data: IReservedStudent[];
}
export const postReservedStudent = async ({
  data,
}: PostReservedStudentProps): Promise<IReservedStudent[]> => {
  try {
    const response = await post<IReservedStudent[]>(`reserved-students/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get reserved student by id
interface GetReservedStudentByIDProps {
  id: string;
}
export const getReservedStudentByID = async ({
  id,
}: GetReservedStudentByIDProps): Promise<IReservedStudent[]> => {
  try {
    const response = await get<IReservedStudent[]>(`reserved-students/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// post new reserved student
interface PostReservedStudentByIDProps {
  data: IReservedStudent;
}
export const postReservedStudentByID = async ({
  data,
}: PostReservedStudentByIDProps): Promise<IReservedStudent> => {
  try {
    const response = await post<IReservedStudent>(`reserved-students/`, data);
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
interface PutSingleReservedStudentProps {
  id: string;
  data: IReservedStudent;
}
// put single reserve student
export const putSingleReserveStudent = async ({
  id,
  data,
}: PutSingleReservedStudentProps): Promise<IReservedStudent[]> => {
  try {
    const response = await put<IReservedStudent[]>(
      `reserved-students/${id}`,
      data
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get all class
export const getClass = async (): Promise<IClass[]> => {
  try {
    const response = await get<IClass[]>("classes");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get class by id
interface GetClassByIDProps {
  id: string;
}
export const getClassByID = async ({
  id,
}: GetClassByIDProps): Promise<IClass | null> => {
  try {
    const response = await get<IClass>(`classes/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return null;
};

// put class by id
interface PutSingleClassProps {
  id: string;
  classdata: IClass;
}
export const putClassByID = async ({
  id,
  classdata,
}: PutSingleClassProps): Promise<IClass[]> => {
  try {
    const response = await put<IClass[]>(`classes/${id}`, classdata);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

// get class by status
type GetClassesByNameProps = {
  className: string;
};
export const getClassesByName = async ({
  className,
}: GetClassesByNameProps): Promise<IClass[]> => {
  try {
    const response = await get<IClass[]>(`classes?ClassName=${className}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
