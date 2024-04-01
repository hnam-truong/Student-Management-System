const generateGender = ({ gender }: { gender: boolean }): string => {
  if (gender === true) {
    return "Male";
  }
  if (gender === false) {
    return "Female";
  }
  return "-";
};

export default generateGender;
