/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as XLSX from "xlsx";
import { useStudentStore } from "../store/StudentStore";
import { useReservedStudentStore } from "../store/ReservedStudentStore";
import { useScoreStore } from "../store/ScoreStore";
import { useStudentClassStore } from "../store/StudentClassStore";
import { useUserStore } from "../store/UserStore";

export const ImportFromExcel = () => {
  const { postStudent } = useStudentStore();
  const { postReservedStudent } = useReservedStudentStore();
  const { postScore } = useScoreStore();
  const { postStudentClass } = useStudentClassStore();
  const { postUser } = useUserStore();

  const readExcelFile = (file: any, setExcelFile: any) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      e.preventDefault();
      const data = e.target?.result;
      if (data !== null) {
        const workbook = XLSX.read(data, { type: "buffer" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const excelData = XLSX.utils.sheet_to_json(worksheet);
        setExcelFile(excelData);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExcelStudent = async (excelData: any) => {
    const transformedData = excelData.map((item: any) => {
      const { StudentClasses, ...rest } = item;
      let studentClassesArray = [];

      if (Array.isArray(StudentClasses)) {
        studentClassesArray = StudentClasses;
      } else if (typeof StudentClasses === "string") {
        studentClassesArray = StudentClasses.split(",").map((aClass: string) =>
          aClass.trim()
        );
      }

      return {
        ...rest,
        StudentClasses: studentClassesArray,
      };
    });

    postStudent(transformedData);
  };
  const handleExcelReservedStudent = async (excelData: any) => {
    const transformedData = excelData.map((item: any) => {
      const { Conditions, ...rest } = item;
      let conditionsArray = [];

      if (Array.isArray(Conditions)) {
        conditionsArray = Conditions;
      } else if (typeof Conditions === "string") {
        conditionsArray = Conditions.split(",").map((aClass: string) =>
          aClass.trim()
        );
      }

      return {
        ...rest,
        Conditions: conditionsArray,
      };
    });
    postReservedStudent(transformedData);
  };
  const handleExcelStudentScore = async (excelData: any) => {
    const transformedData = excelData.map((item: any) => {
      const { ...rest } = item;
      return {
        ...rest,
      };
    });
    postScore(transformedData);
  };
  const handleExcelStudentClass = async (excelData: any) => {
    const transformedData = excelData.map((item: any) => {
      const { ...rest } = item;
      return {
        ...rest,
      };
    });
    postStudentClass(transformedData);
  };
  const handleExcelUser = async (excelData: any) => {
    const transformedData = excelData.map((item: any) => {
      const { ...rest } = item;
      return {
        ...rest,
      };
    });
    postUser(transformedData);
  };

  return {
    readExcelFile,
    handleExcelStudent,
    handleExcelReservedStudent,
    handleExcelStudentScore,
    handleExcelStudentClass,
    handleExcelUser,
  };
};
