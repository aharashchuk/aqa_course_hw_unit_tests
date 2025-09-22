// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат всех переданных объектов

type WithSalary = { salary: number };

function getAvgSalary<T extends WithSalary>(...args: T[]): number {
    const totalSalary = args.reduce((sum, obj) => sum + obj.salary, 0);
    return args.length ? totalSalary / args.length : 0;
}

// console.log(getAvgSalary(
//     { name: "Alice", salary: 50000 },
//     { name: "Bob", salary: 60000 },
//     { name: "Charlie", salary: 70000 }
// ));