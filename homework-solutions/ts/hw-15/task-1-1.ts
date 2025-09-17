// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee {
    name: string,
    salary: number,
    isManager: boolean
}

const QA: IEmployee = {
    name: "Alex",
    salary: 50000,
    isManager: false
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
type EmployeeKeys = keyof IEmployee;
// const exampleKey: EmployeeKeys = "salary"

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys = keyof typeof QA;
// const exampleQaKey: QaKeys = "salary";

// 4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA;
// const exampleUser: UserType = { name: "John", salary: 60000, isManager: true };

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type PartialEmployee = Partial<IEmployee>;
// const partialEmployeeExample: PartialEmployee = { name: "John" };
    
// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type NameAndSalary = Pick<IEmployee, "name" | "salary">;
// const nameAndSalaryExample: NameAndSalary = { name: "John", salary: 60000 };

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type WithoutManager = Omit<IEmployee, "isManager">;
// const withoutManagerExample: WithoutManager = { name: "John", salary: 60000 };

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
type ReadonlyEmployee = Readonly<IEmployee>;

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
const recordExample: Record<string, QaKeys> = {
    newName: "name",
    newSalary: "salary",
    newIsManager: "isManager"
};
