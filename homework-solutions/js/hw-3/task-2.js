

// Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются

// Option 1
const n = 1;
const n2 = Number(`${n}${n}`);
const n3 = Number(`${n}${n}${n}`);
console.log(n + n2 + n3);

// Option 2
const nDuplicated = Number(String(n) + String(n));
const nTripled = Number(String(n) + String(n) + String(n));
console.log(n + nDuplicated + nTripled);