class Employee {
  #salary;
  constructor(firstName, lastName,  profession, salary){
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

   getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Invalid salary');
    } else {
      this.#salary = value;
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

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

}

export { Employee, Company };
