import { totalmem } from "os";

class Employee {
  #salary;
  constructor(firstName, lastName,  profession, salary){
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  isValidTextInput(input) {
    return typeof input === 'string' && /^[A-Za-z]{2,50}$/.test(input);
  }

  isValidSalary(salary) {
    return (typeof salary === 'number' && 
            salary > 0 &&
            salary < 10000);
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (this.isValidTextInput(value)) {
      this._firstName = value;
    } else {
      throw new Error('Invalid first name');
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (this.isValidTextInput(value)) {
      this._lastName = value;
    } else {
      throw new Error('Invalid last name');
    }
  }

   getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    const words = value.split(' ');
    for (let word of words) {
      if (!this.isValidTextInput(word) && word.length !== 1) {
        throw new Error('Invalid profession');
      }
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (this.isValidSalary(value)) {
      this.#salary = value;
    } else {
      throw new Error('Invalid salary');
    }
  }

}

class Company {
  #employees = [];

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (!this.isValidEmployee(employee)) {
      throw new Error('Invalid employee');
    } else {
      this.#employees.push(employee);      
    }
  }

  isValidEmployee(employee) {
    return (employee instanceof Employee && 
      typeof employee.firstName === 'string' && 
      typeof employee.lastName === 'string' &&
      typeof employee.profession === 'string' &&
      typeof employee.salary === 'number')
  }

  getEmployees() {
    return this.#employees;
  }

  getEmployeeIndex(firstName) {
    return this.#employees.findIndex(employee => employee.firstName === firstName);
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const found = this.getEmployeeIndex(firstName);
    if (found !== -1) {
      return this.#employees[found];
    } else {
      throw new Error('Employee not found');
    }
  }

  removeEmployee(firstName) {
    const found = this.getEmployeeIndex(firstName);
    if (found !== -1) {
      this.#employees.splice(found, 1);
    } else {
      throw new Error('Employee not found');
    }
  }

  getTotalSalary() {
    return this.#employees.reduce(
      (total, empl) => total += empl.salary, 0);
  }

}

export { Employee, Company };
