/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach = []; 
numbers.forEach((number) => {number %3 === 0 && forEach.push(number)});

let map = numbers.map((number) => number - numbers.length);

let filter = numbers.filter((num, i, arr) => {return num > arr[i - 1] && i > 0});

let find = numbers.find((num, i) => num === i);

let sort = [...numbers].sort((a, b) => a - b);

let reduce = numbers.reduce((sum, num) => sum += num, 0);

let some = numbers.some((num) => num > 90);

let every = numbers.every((num) => num.toString().length === 2);


export { forEach, map, filter, find, sort, reduce, some, every };
