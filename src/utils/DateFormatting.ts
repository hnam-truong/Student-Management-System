/** This file is use for date formatting, handle dd/MM/yyyy in request and response */

/**
 * Converts a date string from the format used by Ant Design DatePicker (yyyy-MM-dd)
 * to the desired format for backend requests (dd/MM/yyyy).
 *
 * @param antDatePickerValue - The date string in Ant Design DatePicker format.
 * @returns A string representing the date in the desired format for backend requests.
 */

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

/**
 * Converts a date string from the format used in backend responses (dd/MM/yyyy)
 * to the desired format for internal use.
 *
 * @param desiredFormatValue - The date string in the desired format for internal use.
 * @returns A string representing the date in the desired internal format.
 */

export const convertDateFormat = (dateString: string) => {
  // Split the input date string into day, month, and year
  const [day, month, year] = dateString.split("/");

  // Create a new Date object with the parsed day, month, and year
  const parsedDate = new Date(`${year}-${month}-${day}`);

  // Use toISOString to get the date in the desired format
  const formattedDate = parsedDate.toISOString();

  return formattedDate;
};
