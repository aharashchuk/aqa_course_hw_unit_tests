// 1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
//     - Число: переменная num1, значение 42.
const num1: number = 42;

//     - Строка: переменная str, значение "Hello, TypeScript!".
const str: string = "Hello, TypeScript!";

//     - Булево: переменная isComplete, значение true.
const isComplete: boolean = true;

//     - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
const numbers: number[] = [1, 2, 3, 4, 5];

//     - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
const cities: string[] = ["Minsk", "Warsaw", "London"];

//     - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".
const person: object = {name: "Alice", age: 30, city: "Minsk"};

// 2. Создайте псевдонимы типов:
//     - Тип User, который содержит поля name (строка), age (число), и опциональное поле email (строка).
type User = {
    name: string;
    age: number;
    email?: string;
};

//     - Тип Grade, который может принимать одно из значений: 'junior' | 'middle' | 'senior'.
type Grade = 'junior' | 'middle' | 'senior';

// 3. Создайте интерфейс для объекта Car, который должен содержать поля:
//     - brand (строка),
//     - model (строка),
//     - опциональное поле year (число).
interface ICar {
    brand: string;
    model: string;
    year?: number;
}

// 4. Создайте интерфейсы для:
//     - Интерфейса Address с полями street (строка), city (строка), и zipCode (число).
//     - Интерфейса FullAddress, который наследует интерфейс Address и добавляет поле country (строка).
interface IAddress {
    street: string;
    city: string;
    zipCode: number;
}

interface IFullAddress extends IAddress {
    country: string;
}
  
// 5. Создайте объединение типов:
//     - Тип Product с полями id (число), name (строка), и price (число).
//     - Тип DiscountedProduct, который объединяет Product и добавляет поле discount (число).
type Product = {
    id: number;
    name: string;
    price: number;
};

type DiscountedProduct = Product & {
    discount: number;
};

// 6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки. 
//    Затипизировать явно и входные и выходные данные. Используйте следующие данные:

   const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
  };

function calculateDiscount(product: DiscountedProduct): number {
    return product.price - (product.price * product.discount) / 100;
    }

console.log(calculateDiscount(product)); // Ожидается: 900
