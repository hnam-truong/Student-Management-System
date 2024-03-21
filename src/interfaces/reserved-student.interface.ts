export interface IReservedStudent {
  ID: string;
  StudentID: string;
  FullName: string;
  Gender: boolean;
  DateOfBirth: Date;
  Hometown: string;
  Class: string;
  ClassID: string;
  CurrentModules: string;
  ReservedModule: string;
  Reason: string;
  Conditions: string[] | [];
  ReservedStartDate?: Date | undefined;
  ReservedEndDate?: Date | undefined;
  Status: string;
  Email: string;
}
