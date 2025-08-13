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
  const result = wordsArrLowerCase.sort((word1, word2) => 
    [...word1].filter(letter => vowels.includes(letter)).length - 
    [...word2].filter(letter => vowels.includes(letter)).length
  );
  return result;
}



export { sortedByVowels };
