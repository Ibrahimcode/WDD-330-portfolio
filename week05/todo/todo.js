import ToDo from "./utilities.js";

let todos = new ToDo();

const todoPage = document.getElementById("todo-container");

const todoList = document.getElementById("todo__ol");

let addTask = document.getElementById("add-todo__button");

const taskInput = document.getElementById("add-todo__input");

//const li = document.getElementsByTagName("li");

//addTask.addEventListener("click", todos.todoFunction(taskInput));

// addTask.addEventListener("click", function () {
//   console.log(todos.todoFunction(taskInput.value));
// });

addTask.addEventListener("click", function () {
  let view = todos.todoFunction(
    taskInput.value,
    todoList.before(todoList.lastChild)
  );
  //console.log(todos.todoFunction(taskInput));
  //todoList.innerHTML += view;
  todoList.appendChild(view);
  console.log(todos.toDoList);
});

// addTask.addEventListener("click", function () {
//   let view = todos.addToDoToObject(todoList.lastChild());

//   todoList.appendChild(view);
//   console.log(todos.toDoList);
// });
