/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [5,2,7,3,8,1,6]

function findMissingNumber(numbers) {
  // Ваш код
  numbers.sort((a,b) => a - b);

  if (numbers[0] !== 1) return 1;
  
  const missingNumber = numbers.reduce((result, number, index, array) => {
    if (number - array[index - 1] > 1) result = number - 1;
    return result;
  }, 0);
  
  if (missingNumber === 0) return numbers[numbers.length -1] + 1; 
  
  return missingNumber;
}


export { findMissingNumber };
