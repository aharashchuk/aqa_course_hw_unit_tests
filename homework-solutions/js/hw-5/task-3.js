/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const wordLower = word.toLowerCase();
let vowelCount = 0;
let consonantCount = 0;
for (let i = 0; i < wordLower.length; i++) {
    if (vowels.includes(wordLower[i])) {
        vowelCount++;
    } else if (consonants.includes(wordLower[i])) {
        consonantCount++;
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowelCount} vowels and ${consonantCount} consonants` 
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
