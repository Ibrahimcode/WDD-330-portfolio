//  Trello steps

import Todos from "./Todo.js";

let instanceOfTodo = new Todos();

export default class GetTodos {
  constructor() {
    this.todoList = [];
    this.el = instanceOfTodo.todoParenteElement;
    this.activeTodoList = [];
    this.completedTodoList = [];
    this.taskLeft = [];
  }

  getTodos() {
    this.todoList = [];
    const listOfTodos = instanceOfTodo.todoList; //instanceOfTodo.getTodos();

    // iterates over the local storage keys and get the keys

    console.log(localStorage.length);
    //let task = {};
    let task;
    for (var i = 0; i < localStorage.length; i++) {
      let getLocalStorageKey = localStorage.key(i);

      let getLocalStorageValue = JSON.parse(
        localStorage.getItem(getLocalStorageKey)
      );

      // create a single local storage object and pass it to the todo list

      console.log(typeof getLocalStorageValue);

      if (typeof getLocalStorageValue != "boolean") {
        task = getLocalStorageValue;
        this.todoList.push(task);
      }
    }
  }

  completedTodo() {
    this.completedTodoList = [];
    this.getTodos();
    for (let i = 0; i < this.todoList.length; i++) {
      let id = parseInt(Object.keys(this.todoList[i])[0]);
      let checkboxId = parseInt(Object.keys(this.todoList[i])[1]);
      if (this.todoList[i][checkboxId] === true) {
        this.completedTodoList.push(this.todoList[i]);
      }
    }
    console.log(this.completedTodoList);
    return renderActiveTodoList(this.completedTodoList, this.el);
  }

  activeTodo() {
    this.activeTodoList = [];
    this.getTodos();
    for (let i = 0; i < this.todoList.length; i++) {
      let id = parseInt(Object.keys(this.todoList[i])[0]);
      let checkboxId = parseInt(Object.keys(this.todoList[i])[1]);
      if (this.todoList[i][checkboxId] != true) {
        this.activeTodoList.push(this.todoList[i]);
      }
    }
    console.log(this.todoList);
    console.log(this.activeTodoList);
    return renderActiveTodoList(this.activeTodoList, this.el);
  }

  numTaskLeft() {
    this.taskLeft = [];
    this.getTodos();
    console.log(localStorage);
    console.log(JSON.stringify(this.todoList));
    for (let i = 0; i < this.todoList.length; i++) {
      let id = parseInt(Object.keys(this.todoList[i])[0]);
      let checkboxId = parseInt(Object.keys(this.todoList[i])[1]);
      if (this.todoList[i][checkboxId] != true) {
        this.taskLeft.push(this.todoList[i]);
      }
    }
    console.log(this.taskLeft);
    document.getElementById("task_left").innerHTML = this.taskLeft.length;
  }
}

let getdosInstance = new GetTodos();

/**
 * foreach todo in list, build a li element for the todo, and append it to element
 *  @param {array} list The list of tasks to render to HTML
 *  @param {element} element The DOM element to insert our list elements into.
 */
function renderActiveTodoList(list, element) {
  //let listKeys; //[list[i].key]; // store the keys

  let mainElement = element;
  let completeLi = [];

  console.log(list);

  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");

    // create the checkbox
    let check = document.createElement("input"); // '<input type="checkbox" name="" id="">';

    // create the delete button
    let span = document.createElement("span"); // "<span>X</span>";

    // create the task label
    let label = document.createElement("label"); // '<label for=""></label>';
    //const element = array[i];

    //listKeys = Object.keys(list[i]);

    // convert the date key to miliseconds and use it as the li id

    let id = parseInt(Object.keys(list[i])[0]);
    let checkboxId = parseInt(Object.keys(list[i])[1]);

    console.log(list[i][checkboxId]);
    // if (list[i][checkboxId] === true) {
    li.setAttribute("id", id);
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", checkboxId);
    if (list[i][checkboxId] === true) {
      check.checked = true;
    }
    label.setAttribute("for", checkboxId);
    label.setAttribute("id", checkboxId + 1);
    label.textContent = list[i][id]; //list[i].task;
    console.log(list[i][id]);
    console.log(id);
    span.setAttribute("name", id);
    span.textContent = "X";

    // append the li to the parent DOM element
    li.appendChild(check);
    li.appendChild(label);
    li.appendChild(span);

    completeLi.push(li); // push the li element to the array.

    mainElement.append(li);
  }

  for (let i = 0; i < completeLi.length; i++) {
    //const element = array[i];
    mainElement.appendChild(completeLi[i]);
    //mainElement.a;
  }
  let checkMainElement = mainElement;
  return mainElement;
}

function writeToLS(key, data) {}
