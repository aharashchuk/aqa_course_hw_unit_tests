/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  // Ваш код
  if (wordsArr.length === 0) return [];
  const vowels = 'aeiou';
  const wordsArrLowerCase = wordsArr.map(word => word.toLowerCase())
  
  const countVowels = word => [...word].filter(letter => vowels.includes(letter)).length;
  
  const result = wordsArrLowerCase.sort((word1, word2) => countVowels(word1) - countVowels(word2));
  
  return result;
}



export { sortedByVowels };
