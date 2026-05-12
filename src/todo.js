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
  const priorityInput = document.querySelector("#input-priority");
  const priorityText =
    "priority-" +
    priorityInput.options[priorityInput.selectedIndex].text.toLowerCase();
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

