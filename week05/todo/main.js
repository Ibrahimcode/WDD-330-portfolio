// Trello steps

// import Todos

import Todos from "./Todo.js";

import onTouch from "./utilities.js";
//import checkboxState from "./utilities.js";

import GetTodos from "./ls.js";

//import activeTodo from "./ls.js";

// create an instance of Todo

const todoInstance = new Todos();

// create an instance of GetTodos

const getTodoInstance = new GetTodos();

// load the window

window.addEventListener("load", todoInstance.getTodos());
window.addEventListener("load", getTodoInstance.numTaskLeft());
let checkBox = document.querySelectorAll("input[type='checkbox']");
window.addEventListener("load", checkbox());

// Bind the addTodo from the Todos class with the add button in the HTML

const todoButton = document.getElementById("add-todo__button");

const body = document.getElementById("body");

//const get_todo = document.getElementById("get-todo");

todoButton.addEventListener("click", function () {
  let inputTask = document.getElementById("add-todo__input").value;

  console.log(inputTask);

  if (inputTask == "") {
    let warning = document.getElementById("warning");
    warning.innerHTML = "Please Input a task in the text field below";
  } else {
    warning.innerHTML = "";
    let todos = todoInstance.addTodo();
    //todos;
    //return todoInstance.addTodo;
    console.log(todos);
    // console.log("clicked happend"); // PASS
    checkbox();
    getTodoInstance.numTaskLeft();
  }
});

let label = document.querySelectorAll("li>label");

let li = document.getElementById("1613489028000");

label.forEach((item) => {
  item.addEventListener("click", function () {
    let labelFor = item.getAttribute("for");
    onTouch(labelFor);
    getTodoInstance.numTaskLeft();
  });
});

// call the checkboxState function when any checkbox is click

function checkbox() {
  if (!checkBox.length == 0) {
    checkBox.forEach((item) => {
      item.addEventListener("click", function () {
        let checkboxId = item.getAttribute("id");
        //checkboxState(checkboxId);
        onTouch(checkboxId);
        getTodoInstance.numTaskLeft();
      });
    });
  }
}

// get the completed todos

let comtleted = document.getElementById("checked4");

comtleted.addEventListener("click", function () {
  document.querySelector("ol").innerHTML = "";
  getTodoInstance.completedTodo();
});

//get the active todos

let active = document.getElementById("checked3");

active.addEventListener("click", function () {
  console.log("active");
  document.querySelector("ol").innerHTML = "";
  getTodoInstance.activeTodo();
});

// get all the todos

let allTodos = document.getElementById("checked2");

allTodos.addEventListener("click", function () {
  document.querySelector("ol").innerHTML = "";
  todoInstance.getTodos();
});

// Check the amount of task left

let taskLeftBtn = document.getElementById("checked1");

taskLeftBtn.addEventListener("click", function () {
  getTodoInstance.numTaskLeft();
});

// delete any todo

const deleteTodo = document.querySelectorAll("li > span");

deleteTodo.forEach((item) => {
  item.addEventListener("click", function () {
    let deleteTodoFor = item.getAttribute("name");
    document.getElementById(deleteTodoFor).remove();
    //localStorage.removeItem(parseInt(deleteTodoFor + 4));
    let deleteId = parseInt(deleteTodoFor) + 4;
    console.log(deleteId);
    //console.log(localStorage.getItem());
    localStorage.removeItem(deleteId);
    console.log(localStorage);
    getTodoInstance.numTaskLeft();
    //(deleteTodoFor);
  });
});
