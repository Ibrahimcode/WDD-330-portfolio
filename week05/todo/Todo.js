// Trello steps

export default class Todos {
  /**
   * in the constructor you should set a variable with the element our
   * todo list will be built in, and the key we will use to read/write from
   * localStorag
   */
  constructor() {
    //todoList = [];
    this.todoParenteElement = document.getElementById("todo__ol");
    //const _lsKey;
    this.todoList = [];
  }

  /**
   * push an element to the todoList
   * @param {obj} object to push in to the todoList.
   */
  pushInTodoList(obj) {
    this.todoList = [];
    this.todoList.push(obj);
  }

  /**
   * get the todo list
   */
  getTodos() {
    this.todoList = [];
    getTodos();
    //return this.todoList;
  }

  /**
   * Add a method to the Todos class called addTodo. It should grab the input
   * in the html where users enter the text of the task, then send that along
   * with the key to a SaveTodo() function. Then update the display with the
   * current list of tasks
   */
  addTodo() {
    const taskInput = document.getElementById("add-todo__input");
    const key = new Date();

    saveTodo(taskInput.value, key);

    // call the listTodos()
    //return this.listTodos();
    return singleLi(taskInput, this.todoParenteElement);
    console.log("in the todo method");
  }

  /**
   * Add a method to the Todos class called listTodos(). It should use the
   * renderTodoList function to output our todo list when called.
   * It should get called when a todo is added, or removed, and when the Todos class
   * is instantiated.
   */
  listTodos() {
    const renderList = this.todoList; //provideTodo(); //this.getTodos();
    console.log("todoList = " + this.todoList);
    return renderTodoList(renderList, this.todoParenteElement);
  }
  clearLS() {
    clearLocalStorage();
  }
}

// create an instance of the Todo class

const instanceOfTodo = new Todos();

/**
 * use this to display the task the user inputed
 * @param {input} what the user provide
 * @param {element} parent node.
 */
function singleLi(input, element) {
  let li = document.createElement("li");

  // create the checkbox
  let check = document.createElement("input"); // '<input type="checkbox" name="" id="">';

  // create the delete button
  let span = document.createElement("span"); // "<span>X</span>";

  // create the task label
  let label = document.createElement("label"); // '<label for=""></label>';

  // convert the date key to miliseconds and use it as the li id
  let id = Date.parse(new Date());

  li.setAttribute("id", id);
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", id + 1);
  label.setAttribute("for", id + 1);
  label.textContent = input.value;
  span.setAttribute("id", id);
  span.textContent = "X";

  // append the li to the parent DOM element
  li.appendChild(check);
  li.appendChild(label);
  li.appendChild(span);

  element.append(li);

  return element;
}

/**
 * build a todo object, add it to the todoList, and save the new list to
 * local storage.
 * @param {string} key The key under which the value is stored under in LS
 *  @param {string} task The text of the task to be saved.
 */

function saveTodo(task, key) {
  //let id = key;
  let idKey = Date.parse(key);
  let content = task; // string
  let completed = "false";

  let checkId = idKey + 1;
  let objKey = idKey + 4;

  // save the task in an object
  let tasks = {};
  tasks[idKey] = content;
  //console.log(completed);
  tasks[checkId] = completed;
  //console.log(tasks);

  // push the task to the todoList
  instanceOfTodo.pushInTodoList(tasks);

  let testList = instanceOfTodo.todoList; //getTodos();
  console.log(testList);
  // save the task  to local storage

  localStorage.setItem(objKey, JSON.stringify(tasks));
}

/**
 * check the contents of todoList, a local variable containing a list of ToDos.
 * If it is null then pull the list of todos from localstorage, update the local variable,
 * and return it
 * @param {string} key The key under which the value is stored under in LS @return
 * {array} The value as an array of objects
 *
 */

function getTodos() {
  instanceOfTodo.todoList = [];
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
      listOfTodos.push(task);
    }
  }

  if (!localStorage.length == 0) {
    return instanceOfTodo.listTodos();
  } else {
    instanceOfTodo.todoList = [];
  }
}

// suggestion: call this when the page load

/**
 * foreach todo in list, build a li element for the todo, and append it to element
 *  @param {array} list The list of tasks to render to HTML
 *  @param {element} element The DOM element to insert our list elements into.
 */
function renderTodoList(list, element) {
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

    //id = parseInt(id);

    console.log(list[i][checkboxId]);
    if (list[i][checkboxId] === true) {
      li.setAttribute("id", id);
      check.setAttribute("type", "checkbox");
      check.setAttribute("id", checkboxId);
      check.checked = true;
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
    } else {
      li.setAttribute("id", id);
      check.setAttribute("type", "checkbox");
      check.setAttribute("id", checkboxId);
      label.setAttribute("for", checkboxId);
      label.setAttribute("id", checkboxId + 1);
      label.textContent = list[i][id]; //list[i].task;
      console.log(list[i][checkboxId]);
      console.log(id);
      console.log(instanceOfTodo.todoList.length);
      span.setAttribute("name", id);
      span.textContent = "X";

      // append the li to the parent DOM element
      li.appendChild(check);
      li.appendChild(label);
      li.appendChild(span);

      completeLi.push(li); // push the li element to the array.
    }
  }

  for (let i = 0; i < completeLi.length; i++) {
    //const element = array[i];
    mainElement.appendChild(completeLi[i]);
    //mainElement.a;
  }
  let checkMainElement = mainElement;
  return mainElement;
}

function clearLocalStorage() {
  localStorage.clear();
}
