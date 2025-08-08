import { mergedArray } from "../hw-6/task-1.mjs";

/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let mergedArray = [];
  for (const array of arrays) {
    mergedArray = [...mergedArray, ...array];
  }
  return mergedArray;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const wordList = [];
  for (const word of sentence.split(' ')) {
    if (word !== '') {
      wordList.push(word);
    }     
  }
  console.log(wordList);
  for (let i = 0; i < wordList.length; i++) {
      wordList[i] = i === 0 ? wordList[i].toLowerCase() : wordList[i][0].toUpperCase() + wordList[i].slice(1).toLowerCase();
  }
  const mergedWordList = wordList.join('_');
  return mergedWordList;
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  let startNumber = 0;
  let nextNumber = 1;

  for (let i = 1; i <= n; i++) {
    const currentNumber = startNumber + nextNumber;
    startNumber = nextNumber;
    nextNumber = currentNumber;
  }
  return startNumber;
}

// function fibonacci(n) {
//   if ( n <= 1 ) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

export { mergeArrays, fibonacci, devideBy };
