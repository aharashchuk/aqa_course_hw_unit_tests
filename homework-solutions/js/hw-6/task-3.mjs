/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique = [];

const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const tempArray = [...initialArray];

for (const num of initialArray) {
  if (tempArray.includes(num)) {
    unique.push(num);
    while (tempArray.includes(num)) {
      const index = tempArray.indexOf(num);
      tempArray.splice(index, 1);
    }
  }  
}

    
console.log(unique);

export { unique };
