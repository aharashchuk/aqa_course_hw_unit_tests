// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

enum DEPARTMENTS {
  QA = "Отдел тестирования",
  MARKETING = "Отдел маркетинга",
  ADMINISTRATION = "Администрация",
  DEVELOPMENT = "Отдел разработки",
  LABOR_SAFETY = "Отдел охраны труда",
  ANALYTICS = "Отдел аналитики",
}

interface IDepartment {
  id: number;
  name: DEPARTMENTS;
  employees_count?: number;
}

interface IEnterprise {
  id: number;
  name: string;
  departments?: IDepartment[];
  getDepartmentById(id: number): IDepartment | undefined;
  getDepartmentByName(name: DEPARTMENTS): IDepartment | undefined;
  getTotalEmployeesCount(): number;
  addDepartment(department: IDepartment): void;
  editDepartment(departmentId: number, newName: DEPARTMENTS): void;
  deleteDepartment(departmentId: number): void;
  moveEmployees(fromDepartmentId: number, toDepartmentId: number, count: number): void;  
}

interface IEnterpriseStorage<T extends IEnterprise> {
  enterprises: T[];
  getAllEnterprises(): T[];
  getEnterpriseByDepartment(id: T["id"] | T["name"]): T | undefined;
  addEnterprise(name: string): void;
  addDepartment(enterpriseId: T["id"], departmentName: DEPARTMENTS): void;
  editEnterprise(enterpriseId: T["id"], newName: string): void;
  editDepartment(departmentId: number, newName: DEPARTMENTS): void;
  deleteEnterprise(enterpriseId: T["id"]): void;
  deleteDepartment(departmentId: number): void;
  moveEmployees(fromDepartmentId: number, toDepartmentId: number, count: number): void;
}

class EnterpriseStorage<T extends IEnterprise> implements IEnterpriseStorage<T> {
  constructor(public enterprises: T[]) {}

  getAllEnterprises(): T[] {
    return this.enterprises;
  };
  
  getEnterpriseDepartment(id: T["id"] | T["name"]): T | undefined {
    return this.enterprises.find(enterprise =>
      enterprise.departments?.some(department => department.id === id || department.name === id)
    );
  };
  
  addEnterprise(name: string): void {
    const newEnterprise: T = {
      id: this.enterprises.length ? Math.max(...this.enterprises.map(e => e.id)) + 1 : 1,
      name,
  };
  abstract addDepartment(enterpriseId: T["id"], departmentName: DEPARTMENTS): void;
  abstract editEnterprise(enterpriseId: T["id"], newName: string): void;
  abstract editDepartment(departmentId: number, newName: DEPARTMENTS): void;
  abstract deleteEnterprise(enterpriseId: T["id"]): void;
  abstract deleteDepartment(departmentId: number): void;
  abstract moveEmployees(fromDepartmentId: number, toDepartmentId: number, count: number): void;
}


class Department implements IDepartment {

  constructor(
    public readonly id: number,
    public name: DEPARTMENTS,
    public employees_count: number,
  ) {}
}

class Enterprise implements IEnterprise {

  constructor(
    public readonly id: number,
    public name: string,
    public departments: IDepartment[],
  ) {}
// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)
