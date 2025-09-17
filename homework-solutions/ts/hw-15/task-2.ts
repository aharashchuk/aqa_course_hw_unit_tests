// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

const sampleObject = {
    id: 1,
    name: "Sample",
    isActive: true
};


function getKeyByValue<T extends object> (obj: T, value: T[keyof T]): keyof T | undefined {
    for (const key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    // return Object.keys(obj).find(key => obj[key] === value);
    // Если я правильно понимаю на такое решение ругается из за того что 
    // Object.keys(obj) возвращает string[] а не (keyof T)[]
}

console.log(getKeyByValue(sampleObject, "Sample"));
console.log(getKeyByValue(sampleObject, 2));