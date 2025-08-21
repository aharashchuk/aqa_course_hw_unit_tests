/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

import { error } from "console";

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!character || !character.name || typeof character.age !== 'number') {
    throw new Error('Invalid character object');
  }
  characters.push(character);
}

function getCharacter(name) {
  return characters.find(obj => obj["name"] === name);
}

function getCharactersByAge(minAge) {
  if (!minAge || typeof minAge !== 'number') {
    throw new Error('Invalid minAge object');
  }
  return characters.filter(obj => obj["age"] >= minAge);
}


function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (!character) throw new Error('Character not found');
  Object.assign(character, newCharacter);
}

function removeCharacter(name) {
  const index = characters.findIndex(obj => obj["name"] === name);
  if (index === -1) throw new Error('Character not found');
  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
