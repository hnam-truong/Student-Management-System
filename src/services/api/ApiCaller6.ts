import { get } from "./api6";
import { IProvince } from "../../interfaces/province.interface";

// get all province
const getLocationProvinces = async (): Promise<IProvince[]> => {
  try {
    const response = await get<IProvince[]>("provinces");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};
export default getLocationProvinces;
