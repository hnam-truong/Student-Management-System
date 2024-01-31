import { BsDash } from "react-icons/bs";

//This function used to generate status text based on value, if status is not defined, return --
export const generateStatus = (status: boolean | any) => {
  // Assuming status is a boolean indicating whether the course is completed
  if (status === undefined || status === null) {
    return <BsDash />;
  }
  return status ? "Passed" : "Failed";
};
