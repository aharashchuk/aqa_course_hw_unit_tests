import {
  DEPARTMENTS,
  IAdministrativeUnit,
  IDepartment,
  IEnterprise,
  ICompany,
} from "./types";


abstract class AdministrativeUnit implements IAdministrativeUnit {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
  
  editName(newName: string): void {
    this.name = newName;
  }
}

class Department extends AdministrativeUnit implements IDepartment {
  public employees_count: number;
  
  constructor(
    id: number,
    name: DEPARTMENTS,
    employees_count: number = 0,
  ) {
    super(id, name);
    this.employees_count = employees_count;
  }
}

class Enterprise extends AdministrativeUnit implements IEnterprise {
  constructor(
    public readonly id: number,
    public name: string,
    protected departments: IDepartment[] = [],
  ) {
    super(id, name);
  }

  getAllDepartments(): IDepartment[] {
    return structuredClone(this.departments);
  }

  getDepartmentIndexById(id: number): number {
    const found = this.departments.findIndex(department => department.id === id);
    return found !== -1 ? found : -1;
  }

  getDepartmentById(id: number): IDepartment | null {
    const found = this.departments.find(department => department.id === id);
    return found ? found : null;
  }

  getDepartmentByName(name: DEPARTMENTS): IDepartment | null {
    const found = this.departments.find(department => department.name === name);
    return found ? structuredClone(found) : null;
  }

  getTotalEmployeesCount(): number {
    return this.departments.reduce((total, department) => total + (department.employees_count || 0), 0);
  }

  getNewDepartmentId(): number {
    if (this.departments.length === 0) {
      return 1;
    } else return this.departments.length + 1;
  }

  addDepartment(name: DEPARTMENTS): void {
    const newDepartment = new Department(this.getNewDepartmentId(), name);
    this.departments.push(newDepartment);
  }

  editDepartment(updatedDepartment: IDepartment): void {
    const departmentIndex = this.getDepartmentIndexById(updatedDepartment.id);
    if (departmentIndex !== -1) {
      this.departments[departmentIndex] = structuredClone(updatedDepartment);
    } else {
      throw new Error(`Department with id ${updatedDepartment.id} not found`);
    }
  }
  
  deleteDepartment(departmentId: number): void {
    const departmentIndex = this.getDepartmentIndexById(departmentId);
    if (departmentIndex !== -1 && this.departments[departmentIndex].employees_count === 0) {
      this.departments.splice(departmentIndex, 1);
    } else {
      throw new Error(`Department with id ${departmentId} not found`);
    }
  }

  moveEmployees(fromDepartmentId: number, toDepartmentId: number, count: number): void {
    const fromDepartment = this.getDepartmentById(fromDepartmentId);
    const toDepartment = this.getDepartmentById(toDepartmentId);

    if (!fromDepartment) {
      throw new Error(`Source department with id ${fromDepartmentId} not found`);
    }
    if (!toDepartment) {
      throw new Error(`Target department with id ${toDepartmentId} not found`);
    }
    if ((fromDepartment.employees_count || 0) < count) {
      throw new Error(`Not enough employees in source department to move`);
    }

    fromDepartment.employees_count = (fromDepartment.employees_count || 0) - count;
    toDepartment.employees_count = (toDepartment.employees_count || 0) + count;

    this.editDepartment(fromDepartment);
    this.editDepartment(toDepartment);
  }
}

class Company extends AdministrativeUnit implements ICompany {
  private enterprises: IEnterprise[] = [];

  constructor(
    id: number,
    name: string,
    enterprises: IEnterprise[] = [],
  ) {
    super(id, name);
    this.enterprises = enterprises;
  }

  getAllEnterprises(): IEnterprise[] {
    this.enterprises.forEach(enterprise => {
      console.log(`Enterprise ${enterprise.id} (${enterprise.getTotalEmployeesCount()} employees)\n
      ${enterprise.getAllDepartments().map(department => `- ${department.name} (${department.employees_count} employees)`).join("\n")}`);
    });
    return structuredClone(this.enterprises);
  }
  
  getEnterpriseById(id: number): IEnterprise | null {
    const found = this.enterprises.find(enterprise => enterprise.id === id);
    return found ? found : null;
  } 

  getEnterpriseByName(name: string): IEnterprise | null {
    const found = this.enterprises.find(enterprise => enterprise.name === name);
    return found ? structuredClone(found) : null;
  }

  getNewEnterpriseId(): number {
    if (this.enterprises.length === 0) {
      return 1;
    } else return this.enterprises.length + 1;
  }

  addEnterprise(name: string): void {
    const newEnterprise: IEnterprise = new Enterprise(this.getNewEnterpriseId(), name);
    this.enterprises.push(newEnterprise);
  }

  editEnterprise(enterpriseToEdit: IEnterprise): void {
    const enterpriseIndex = this.enterprises.findIndex(enterprise => enterprise.id === enterpriseToEdit.id);
    if (enterpriseIndex !== -1) {
      this.enterprises[enterpriseIndex] = structuredClone(enterpriseToEdit);
    } else {
      throw new Error(`Enterprise with id ${enterpriseToEdit.id} not found`);
    }
  }

  deleteEnterprise(enterpriseId: number): void {
    const enterpriseIndex = this.enterprises.findIndex(enterprise => enterprise.id === enterpriseId);
    if (enterpriseIndex !== -1) {
      this.enterprises.splice(enterpriseIndex, 1);
    } else {
      throw new Error(`Enterprise with id ${enterpriseId} not found`);
    }
  }
}

export {
  Department,
  Enterprise,
  Company,
};