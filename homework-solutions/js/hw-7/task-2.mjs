/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const wordList = [];
  if (typeof sentence !== 'string' || sentence.trim() === '') return [];
  for (const word of sentence.split(' ')) {
    if (word !== '') {
      wordList.push(word);
    }     
  }
  let maxLength = 0;
  for (const word of wordList) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  const longestWords = [];
  for (const word of wordList) {
    if (word.length === maxLength && !longestWords.includes(word)) {
      longestWords.push(word);
    }
  }
  return longestWords
}

export { isPalindrom, findLongestWords };
