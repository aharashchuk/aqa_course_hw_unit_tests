"use strict";

// Работа с оператором IF:
  // 1. Создать переменную "minAge" и присвоить ей значение 18
const minAge = 18;

  // 2. Создать переменную "maxAge" и присвоить ей значение 60
const maxAge = 60;

  // 3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
let age = 19;
console.log(`age: ${age}`);

  // 4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
if (typeof age !== 'number') {
  console.log("Incorrect data type");
}
  // 4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
  //   - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
if (age < minAge ) {
  console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}.`);
   //   - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
 } else if (age >= minAge && age < maxAge) {
  console.log("Welcome!");
  //   - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
 } else if (age > maxAge) {
  console.log("Keep calm and look Culture channel.");
  //   - Иначе выводите "Technical work".
 } else {
  console.log("Technical work");
 }
  // 5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61
