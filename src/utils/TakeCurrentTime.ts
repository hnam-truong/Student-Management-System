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

export const convertDate = (value: number | undefined) => {
  if (value !== undefined) {
    const exp = new Date(value * 1000);
    const outputDate = `${exp.getDate()}/${exp.getMonth() + 1}/${exp.getFullYear()} ${exp.getHours()}:${exp.getMinutes()}`;

    return outputDate;
  }
  return null;
};
