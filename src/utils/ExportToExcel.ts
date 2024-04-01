import { TableColumnsType } from "antd";
import { ColumnGroupType, ColumnsType, ColumnType } from "antd/es/table";
import * as XLSX from "xlsx";
import { IScore } from "../interfaces/score.interface";
import { IStudent } from "../interfaces/student.interface";
import { IReservedStudent } from "../interfaces/reserved-student.interface";

export const exportStudentToExcel = (
  columns: TableColumnsType<IStudent>,
  data: IStudent[]
): boolean => {
  // get header without setting column
  const extractedHeader = [...columns.slice(0, -1)];
  // get key of header with type string
  const header = extractedHeader.map((col) => col.key as string);
  const fileExtension = ".xlsx";
  // get data from props data with key of header
  const extractedData = data.map((item: IStudent) =>
    extractedHeader.map((col) =>
      item[col.key as keyof IStudent] ? item[col.key as keyof IStudent] : ""
    )
  );

  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([]);
  XLSX.utils.sheet_add_aoa(ws, [header, ...extractedData], { origin: "A1" });
  // set default width of each column
  ws["!cols"] = Array(extractedHeader.length).fill({ wch: 18 });
  // create the workbook with a single sheet named 'data'
  const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ["data"] };
  // save to file
  XLSX.writeFile(wb, `StudentsList${fileExtension}`);
  return true;
};

export const exportScoreToExcel = (
  columns: TableColumnsType<IScore>,
  data: IScore[]
): boolean => {
  // function to get all header of table
  const extractHeader = (
    col:
      | ColumnsType<IScore>
      | ColumnGroupType<IScore>
      | TableColumnsType<IScore>
      | ColumnType<IScore>
  ): string | string[] | NonNullable<unknown> => {
    if ((col as ColumnGroupType<IScore>).children) {
      return (col as ColumnGroupType<IScore>).children.map((child) =>
        extractHeader(child)
      );
    }
    return ((col as ColumnType<IScore>).key as string).replace(/\s/g, "");
  };

  const extractedHeader = columns.slice(0, -1).map((col) => extractHeader(col));

  const fileExtension = ".xlsx";
  const extractedData = data.map((item: IScore) =>
    extractedHeader.flatMap((col) => {
      if (Array.isArray(col)) {
        return col.flatMap((child) =>
          item[child as keyof IScore] ? item[child as keyof IScore] : ""
        );
      }
      return item[col as keyof IScore] ? item[col as keyof IScore] : "";
    })
  );
  // extractedData.unshift(columns.slice(0, -1).map((col) => extractHeader(col)));
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([]);
  XLSX.utils.sheet_add_aoa(ws, [extractedHeader.flat(), ...extractedData], {
    origin: "A1",
  });

  const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ["data"] };
  XLSX.writeFile(wb, `ScoresList${fileExtension}`);

  return true;
};

export const exportReserveStudentToExcel = (
  columns: TableColumnsType<IReservedStudent>,
  data: IReservedStudent[]
): boolean => {
  // get header without setting column
  const extractedHeader = [...columns.slice(0, -1)];
  // get key of header with type string
  const header = extractedHeader.map((col) => col.key as string);
  const fileExtension = ".xlsx";
  // get data from props data with key of header
  const extractedData = data.map((item: IReservedStudent) =>
    extractedHeader.map((col) => {
      if (
        col.key === "Gender" &&
        item[col.key as keyof IReservedStudent] === true
      ) {
        return "Male";
      }
      if (
        col.key === "Gender" &&
        item[col.key as keyof IReservedStudent] === false
      ) {
        return "Female";
      }
      return item[col.key as keyof IReservedStudent]
        ? item[col.key as keyof IReservedStudent]
        : "";
    })
  );

  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([]);
  XLSX.utils.sheet_add_aoa(ws, [header, ...extractedData], { origin: "A1" });
  // set default width of each column
  ws["!cols"] = Array(extractedHeader.length).fill({ wch: 18 });
  // create the workbook with a single sheet named 'data'
  const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ["data"] };
  // save to file
  XLSX.writeFile(wb, `StudentsReserveList${fileExtension}`);
  return true;
};
