import {
  Enterprise,
  Department,
  Company
} from "./classes";

import {
  IEnterprise,
  IDepartment,
  ICompany,
  DEPARTMENTS
} from "./types";

// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!
const Galera_Inc: ICompany = new Company(1, "Galera Inc", [
  new Enterprise(1, "Roga", [
    new Department(1, DEPARTMENTS.QA, 10),
    new Department(2, DEPARTMENTS.DEVELOPMENT, 20),

  ]),
  new Enterprise(2, "Kopyta", [
    new Department(1, DEPARTMENTS.MARKETING, 20),
    new Department(2, DEPARTMENTS.ADMINISTRATION, 15),
  ]),
]);

// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

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

console.log("================\nTASK 1:")
console.log(Galera_Inc.getAllEnterprises());

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).
// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")
console.log("================\nTASK 2:")
console.log(Galera_Inc.getEnterpriseById(1));
console.log(Galera_Inc.getEnterpriseByName("Kopyta"));

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")
console.log("================\nTASK 3:")
Galera_Inc.addEnterprise("Hvosty");
console.log(Galera_Inc.getAllEnterprises());

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")
console.log("================\nTASK 4:")
Galera_Inc.getEnterpriseById(1)?.addDepartment(DEPARTMENTS.LABOR_SAFETY);
Galera_Inc.getEnterpriseById(1)?.addDepartment(DEPARTMENTS.ADMINISTRATION);
console.log(Galera_Inc.getEnterpriseById(1)?.getAllDepartments());

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")
console.log("================\nTASK 5:")
Galera_Inc.getEnterpriseById(1)?.editName("Roga i Kopyta");
console.log(Galera_Inc.getEnterpriseById(1));

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")
console.log("================\nTASK 6:")
Galera_Inc.getEnterpriseById(1)?.getDepartmentById(3)?.editName(DEPARTMENTS.ANALYTICS);
console.log(Galera_Inc.getEnterpriseById(1)?.getDepartmentById(1));

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)
console.log("================\nTASK 9:")
Galera_Inc.getEnterpriseById(1)?.moveEmployees(2, 3, 10);
console.log(Galera_Inc.getEnterpriseById(1)?.getAllDepartments());

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)
console.log("================\nTASK 8:")
Galera_Inc.getEnterpriseById(1)?.deleteDepartment(4);
console.log(Galera_Inc.getEnterpriseById(1)?.getAllDepartments());

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)
console.log("================\nTASK 7:")
Galera_Inc.deleteEnterprise(1);
console.log(Galera_Inc.getAllEnterprises());


