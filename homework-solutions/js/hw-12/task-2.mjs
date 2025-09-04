/* 
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
Преобразуйте респонс из JSON в объект
Проверьте, что айди в респонсе === 201
Функция должна возвращать полученный объект из респонса
Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

const testTodoBody = {
    userId: 2,
    id: 31,
    title: `test task ${Date.now()}`,
    completed: false
  }

async function createTodo(todoBody) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todoBody)
    });

    if (response.status !== 201) {
      throw new Error("Failed to create todo");
    }

    const data = await response.json();

    if (data.id !== 201) {
      throw new Error("Unexpected todo ID");
    }

    return data;

  } catch (error) {
    throw error;
  } finally {
    console.log("Function createTodo completed");
  }
}

createTodo(testTodoBody).then((result) => console.log(result));
