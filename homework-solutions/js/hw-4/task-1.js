"user strict";

 // - Создайте переменную salary со значением 1000
const salary = 999;

 //  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
let grade;

if (salary >= 1000) {
    grade = "middle";
} else {
    grade = "junior";
}

console.log(`Salary: ${salary}, Grade: ${grade}`);