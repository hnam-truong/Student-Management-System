export const getCourseStatus = (status: boolean | undefined): string => {
  if (status === true) {
    return "Passed";
  }
  if (status === false) {
    return "Failed";
  }
  return "-";
};

export const getUserStatus = (status: boolean | undefined): string => {
  if (status === true) {
    return "Active";
  }
  if (status === false) {
    return "Inactive";
  }
  return "-";
};
