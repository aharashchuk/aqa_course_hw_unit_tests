/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

import { Console } from "console";

function digitalRoot(number) {
  if (number < 10) {
    return number;
  } else {
    const digits = String(number).split('')
    number = 0;
    for (const digit of digits) {
      number += Number(digit);
    }
    return digitalRoot(number);
  }
}

export { digitalRoot };
