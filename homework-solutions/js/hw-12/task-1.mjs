// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function testCallback() {
  console.log(`Callback Start: ${Date.now()}`);
}

function delayTwoSeconds(callback) {
  console.log(`Start: ${Date.now()}`);
  setTimeout(callback, 2000);
}

delayTwoSeconds(testCallback);

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const resolveOne = new Promise((resolve) => {
  resolve(1);
});

resolveOne.then((result) => {
  console.log(`Resolved with: ${result}`);
});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promiseFailed = new Promise((resolve, reject) => {
    reject(new Error("Promise failed"));
})

promiseFailed.then((result => console.log(result))).catch((error) => console.error(error.message));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

const testArray = [0, 1, 2, 3];

function promiseNumber(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}

testArray.forEach((num) => {
  promiseNumber(num).then((result) => {
    console.log(`Resolved: ${result}`);
  });
});

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
const testPromisesArray = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];

function processPromiseAllResults(results) {
    console.log(results);
    results.forEach((result) => {
        console.log(`Resolved: ${result}`);
    });
}

function processPromiseAllSettledResults(results) {
    console.log(results);
    results.forEach((result) => {
        result.status === "fulfilled" ? console.log(`Resolved: ${result.value}`) : console.log(`Rejected: ${result.reason}`);
    });
}

Promise.all(testPromisesArray).then((results) => processPromiseAllResults(results));

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled(testPromisesArray).then((results) => processPromiseAllSettledResults(results));

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch


async function promiseAllAsync(promisesArray) {
    try {
        const results = await Promise.all(promisesArray);
        processPromiseAllResults(results);
    } catch (error) {
        console.error(error);
    }
}

async function promiseAllSettledAsync(promisesArray) {
    try {
        const results = await Promise.allSettled(promisesArray);
        processPromiseAllSettledResults(results);
    } catch (error) {
        console.error(error);
    }
}

promiseAllAsync(testPromisesArray);
promiseAllSettledAsync(testPromisesArray);
