import { displayTodoList } from "./render.js";
export const todoList = [];
class Todo {
  constructor(id, title, desc, due, priority, notes, project) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
  }
}
export function isEmptyList() {
  return false;
}
export function createTodo() {
  const dataId = crypto.randomUUID();
  const title = document.querySelector("#input-title").value;
  const desc = document.querySelector("#input-desc").value;
  const due = document.querySelector("#input-due").value;
  const priorityInput = "priority-" + document.querySelector("#input-priority").value;
  const priorityText = priorityInput.toLowerCase();
  const notes = document.querySelector("#input-notes").value;
  const projectInput = document.querySelector("#input-project");
  const newTodo = new Todo(
    dataId,
    title,
    desc,
    due,
    priorityText,
    notes,
    projectInput,
  );
  todoList.push(newTodo);
  console.log(todoList);
  displayTodoList(todoList);
}
export function removeTodo(cardId) {
  todoList.splice(
    todoList.findIndex((e) => e.id === cardId),
    1,
  );
  displayTodoList(todoList);
  console.log(todoList);
}
export function editTodo(cardId) {
  const titleText = document.querySelector("#input-title").value;
  const descText = document.querySelector("#input-desc").value;
  const dueText = document.querySelector("#input-due").value;
  const priorityInput = "priority-" + document.querySelector("#input-priority").value;
  const priorityText = priorityInput.toLowerCase();
  const notesText = document.querySelector("#input-notes").value;
  //const projectInput = document.querySelector("#input-project");
  cardId.title = titleText;
  cardId.desc = descText;
  cardId.due = dueText;
  cardId.priority = priorityText;
  cardId.notes = notesText;

}
