/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as XLSX from "xlsx";
// import { useStudentStore } from "../store/StudentStore";
import { BASE_URL, Endpoints } from "../constants/Api";
import { errorNotify, successNotify } from "../components/atoms/Notify/Notify";
// import { useStudentStore } from "../store/StudentStore";

export const ImportFromExcel = () => {
  // const { postStudent } = useStudentStore();
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

    // postStudent(transformedData);

    const totalStudents = transformedData.length;
    let successfulRequests = 0;

    try {
      const response = await fetch(BASE_URL + Endpoints.Student, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error("Failed to add student. Network response was not ok.");
      }
      successfulRequests += 1;

      if (successfulRequests === totalStudents) {
        successNotify("Data added successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      errorNotify("Data add failed.");
      console.error("Failed to add student", error);
    }
  };

  const handleExcelReservedStudent = async (excelData: any) => {
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

    // postStudent(transformedData);

    const totalStudents = transformedData.length;
    let successfulRequests = 0;

    try {
      const response = await fetch(BASE_URL + Endpoints.Student, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error("Failed to add student. Network response was not ok.");
      }
      successfulRequests += 1;

      if (successfulRequests === totalStudents) {
        successNotify("Data added successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      errorNotify("Data add failed.");
      console.error("Failed to add student", error);
    }
  };

  const handleExcelStudentScore = async (excelData: any) => {
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

    // postStudent(transformedData);

    const totalStudents = transformedData.length;
    let successfulRequests = 0;

    try {
      const response = await fetch(BASE_URL + Endpoints.Student, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error("Failed to add student. Network response was not ok.");
      }
      successfulRequests += 1;

      if (successfulRequests === totalStudents) {
        successNotify("Data added successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      errorNotify("Data add failed.");
      console.error("Failed to add student", error);
    }
  };

  const handleExcelStudentClass = async (excelData: any) => {
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

    // postStudent(transformedData);

    const totalStudents = transformedData.length;
    let successfulRequests = 0;

    try {
      const response = await fetch(BASE_URL + Endpoints.Student, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error("Failed to add student. Network response was not ok.");
      }
      successfulRequests += 1;

      if (successfulRequests === totalStudents) {
        successNotify("Data added successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      errorNotify("Data add failed.");
      console.error("Failed to add student", error);
    }
  };

  const handleExcelUser = async (excelData: any) => {
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

    // postStudent(transformedData);

    const totalStudents = transformedData.length;
    let successfulRequests = 0;

    try {
      const response = await fetch(BASE_URL + Endpoints.Student, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error("Failed to add student. Network response was not ok.");
      }
      successfulRequests += 1;

      if (successfulRequests === totalStudents) {
        successNotify("Data added successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      errorNotify("Data add failed.");
      console.error("Failed to add student", error);
    }
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
