/* eslint-disable import/prefer-default-export */
export const getCurrentDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
};

export const getCurrentTime = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const h = today.getHours();
  const m = today.getMinutes();
  return `${h}${":"}${m}${" "}${date}/${month}/${year}`;
};
