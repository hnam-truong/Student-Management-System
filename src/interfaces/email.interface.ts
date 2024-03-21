import { IModuleScore } from "./module-score";

export interface IEmail {
  ID: string;
  Name: string;
  Description: string;
  ApplyTo: string;
  Category: string;
  Status: boolean;
  Subject: string;
  CreatedOn: string;
  CreatedBy: string;
  Sender: string;
  Receiver: string;
  Cc: string;
  DearName: boolean;
  Body: string;
  ModuleScores: Array<IModuleScore>;
}
