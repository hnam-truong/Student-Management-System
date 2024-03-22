export interface IClass {
  ClassID: string;
  ClassName: string;
  StartDate: string;
  EndDate: string;
  CreatedDate: string;
  CreatedBy: string;
  UpdatedDate: string;
  UpdatedBy: string;
  Duration: number;
  Location: string;
  Status: string;
  ProgramID: string;
  StartTime: string;
  EndTime: string;
  Trainers: string[];
  FSU: string;
  SpecificLocation: { ID: string; Name: string }[];
  Reviewer: string;
  Approver: string;
  ReviewDate: string;
  ApproveDate: string;
}
