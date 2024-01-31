//interface of student in system
export interface IStudent {
  ID: string;
  Name: string;
  Gender: string;
  DateOfBirth: Date;
  Status: string;
  Phone: string;
  Email: string;
  PermanentResidence: string;
  Location: string;
  University: string;
  Major: string;
  RECer: string;
  GPA: number;
  GraduationTime: Date;
  ClassCode: string;
  ClassStartDate: Date;
}

//interface of score of student
export interface IScore {
  ID: string;
  FullName: string;
  Account: string;
  ASM: number;
  HTML: number;
  CSS: number;
  Quiz3: number;
  Quiz4: number;
  Quiz5: number;
  Quiz6: number;
  AvgQuiz: number;
  Practice1: number;
  Practice2: number;
  Practice3: number;
  AvgASM: number;
  QuizFinal: number;
  Audit: number;
  PracticeFinal: number;
  FinalModule: number;
  GPAModule: number;
  LevelModule: number;
  Mock: number;
  MockFinalModule: number;
  MockGPAModule: number;
  MockLevelModule: number;
  Status: boolean;
  MockStatus: boolean;
}

//interface of reserved student
export interface IReservedStudent {
  ID: string;
  StudentID: string;
  FullName: string;
  Gender: boolean;
  DateOfBirth: Date;
  Hometown: string;
  Class: string;
  ReservedModule: string;
  Reason: string;
  ReservedStartDate: Date;
  ReservedEndDate: Date;
  Status: string;
}

//interface of class
export interface IClass {
  ClassID: string;
  ClassName: string;
  StartDate: Date;
  EndDate: Date;
  CreatedDate: Date;
  CreatedBy: string;
  UpdatedDate: Date;
  UpdatedBy: string;
  Duration: number;
  Location: string;
  Status: boolean;
  ProgramID: string;
}

//interface of student in class
export interface IClassStudent {
  ID: string;
  FullName: string;
  Phone: string;
  Email: string;
  Status: string;
}
