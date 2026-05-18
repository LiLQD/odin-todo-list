import { activeProject } from './state.js';
import { findTodoInProject } from './project.js';
import { displayTodoList } from './render.js';

export const todoList = JSON.parse(localStorage.getItem('Todo List')) || [
  {
    id: crypto.randomUUID(),
    title: 'Template',
    desc: 'Template description',
    due: '2000-11-11',
    priority: 'priority-medium',
    notes: 'Template notes',
    project: 'Defualt',
  },
];
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
  const title = document.querySelector('#input-title').value;
  const desc = document.querySelector('#input-desc').value;
  const due = document.querySelector('#input-due').value;
  const priorityInput =
    'priority-' + document.querySelector('#input-priority').value;
  const priorityText = priorityInput.toLowerCase();
  const notes = document.querySelector('#input-notes').value;
  const projectInput = activeProject;
  const newTodo = new Todo(
    dataId,
    title,
    desc,
    due,
    priorityText,
    notes,
    projectInput
  );
  todoList.push(newTodo);
  localStorage.setItem('Todo List', JSON.stringify(todoList));
  displayTodoList(findTodoInProject(newTodo.project));
}
export function removeTodo(cardId) {
  todoList.splice(
    todoList.findIndex((e) => e.id === cardId),
    1
  );
  displayTodoList(findTodoInProject(activeProject));
  console.log(todoList);
}
export function editTodo(cardId) {
  const titleText = document.querySelector('#input-title').value;
  const descText = document.querySelector('#input-desc').value;
  const dueText = document.querySelector('#input-due').value;
  const priorityInput =
    'priority-' + document.querySelector('#input-priority').value;
  const priorityText = priorityInput.toLowerCase();
  const notesText = document.querySelector('#input-notes').value;
  const projectInput = activeProject;
  cardId.title = titleText;
  cardId.desc = descText;
  cardId.due = dueText;
  cardId.priority = priorityText;
  cardId.notes = notesText;
  cardId.project = projectInput;
}
