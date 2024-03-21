interface IModuleGroup {
  Name: string;
  Module: string;
  Applied: boolean;
}

export interface IModuleScore {
  ID: string;
  ModuleGroupName: string;
  ModuleGroup: IModuleGroup[];
  Applied: boolean;
}
