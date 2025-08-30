class Employee {
  #salary;
  constructor(firstName, lastName, salary){
    this._firstName = firstName;
    this._lastName = lastName;
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

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this._programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return this._programmingLanguages;
  }

  addProgrammingLanguage(value) {
    if (this.isValidTextInput(value)) {
      this._programmingLanguages.push(value);
    } else {
      throw new Error('Invalid programming languages');
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this._teamSize = teamSize;
  }

  get teamSize() {
    return this._teamSize;
  }

  increaseTeamSize() {
    this._teamSize++;
  }

}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this._designTools = designTools;
  }

  get designTools() {
    return this._designTools;
  }

  addDesignTool(tool) {
    if (this.isValidTextInput(tool)) {
      this._designTools.push(tool);
    } else {
      throw new Error('Invalid design tool');
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
      typeof employee.salary === 'number' &&
      !this.#employees.some(empl => empl.getFullName() === `${employee.firstName} ${employee.lastName}`)
    )
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

  getEmployeesByProfession(profession) {
    return this.#employees.filter(
      employee => employee.constructor.name === profession);
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

export { Employee, Company, Designer, Developer, Manager };
