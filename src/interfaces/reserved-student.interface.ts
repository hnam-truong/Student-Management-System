export interface IReservedStudent {
  ID: string;
  StudentID: string;
  FullName: string;
  Gender: boolean;
  DateOfBirth: string;
  Hometown: string;
  Class: string;
  ClassID: string;
  CurrentModules: string;
  ReservedModule: string;
  Reason: string;
  Conditions: string[] | [];
  ReservedStartDate?: string | undefined;
  ReservedEndDate?: string | undefined;
  Status: string;
  Email: string;
}
