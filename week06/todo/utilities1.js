export default class ToDo {
  constructor() {
    this.toDoList = [];
    this.todo = {};
    this.addTask = document.getElementById("add-todo__input");
  }

  todoFunction(todoInput, el) {
    const time = new Date();
    this.todo.ID = time;
    const oneToDo = el;
    this.todo.liView = el;
    //this.todo.task = todoInput;
    const isCompleted = false;
    //alert("click");
    //return this.getTodos();
    const oneToDoView = this.oneToDoView();
    // this.todo.view = oneToDoView;

    this.toDoList.push(this.todo);
    return oneToDoView;
  }

  getTodos() {
    console.log(this.todo);
  }

  oneToDoView() {
    // const view =
    //   "<li>" +
    //   "<label>" +
    //   "<input " +
    //   "type =" +
    //   "checkbox" +
    //   ">" +
    //   "</label>" +
    //   "<span>" +
    //   this.todo.task +
    //   "</span>" +
    //   '<input type="button" id= "delete-button"  value ="X">' +
    //   "</li>";
    let li = document.createElement("li");
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    let span = document.createElement("spam");
    let button = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    button.setAttribute("type", "button");
    button.setAttribute("id", "delete-button");
    button.setAttribute("value", "X");

    span.textContent = this.todo.task;
    label.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(span);
    li.appendChild(button);

    const view = li;
    return view;
  }
  //   addToDoToObject(el) {
  //     const oneToDo = el;
  //     this.todo.liView = el;
  //   }
}

/* <label for="todo_check" class="todo-label">
<input type="checkbox" name="" id="todo-check" class="todo-check" />
</label>
<span class="task" id="task"></span>
<input type="button" name="" id="" value="X" /><br /> */
