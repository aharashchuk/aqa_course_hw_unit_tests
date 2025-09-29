enum DEPARTMENTS {
  QA = "QA Department",
  MARKETING = "Marketing Department",
  ADMINISTRATION = "Administration Department",
  DEVELOPMENT = "Development Department",
  LABOR_SAFETY = "Labor Safety Department",
  ANALYTICS = "Analytics Department",
}

interface IAdministrativeUnit {
  id: number;
  name: string;
  editName(newName: string): void;
}

interface IDepartment extends IAdministrativeUnit {
  employees_count: number;
}

interface IEnterprise extends IAdministrativeUnit {
  getAllDepartments(): IDepartment[]
  getDepartmentIndexById(id: number): number;
  getDepartmentById(id: number): IDepartment | null;
  getDepartmentByName(name: DEPARTMENTS): IDepartment | null;
  getTotalEmployeesCount(): number;
  getNewDepartmentId(): number;
  addDepartment(name: DEPARTMENTS): void;
  editDepartment(updatedDepartment: IDepartment): void;
  deleteDepartment(departmentId: number): void;
  moveEmployees(fromDepartmentId: number, toDepartmentId: number, count: number): void;  
}

interface ICompany extends IAdministrativeUnit {
  getAllEnterprises(): IEnterprise[];
  getEnterpriseById(id: number): IEnterprise | null;
  getEnterpriseByName(name: string): IEnterprise | null;
  getNewEnterpriseId(): number;
  addEnterprise(name: string): void;
  editEnterprise(updatedEnterprise: IEnterprise): void;
  deleteEnterprise(enterpriseId: number): void;
}



export {
  DEPARTMENTS,
  IAdministrativeUnit,
  IDepartment,
  IEnterprise,
  ICompany,
};