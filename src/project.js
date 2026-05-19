import { removeTodo, todoList } from './todo.js';
import { displayProjectList } from './render.js';
import { setActiveProject } from './state.js';
export const projectList = JSON.parse(localStorage.getItem('Project List')) || [
  { id: crypto.randomUUID(), name: 'Default', count: 0 },
];
class Project {
  constructor(id, name, count) {
    this.id = id;
    this.name = name;
    this.count = count;
  }
}

export function createProject() {
  const dataId = crypto.randomUUID();
  const name = document.querySelector('#input-project-name').value;
  const newProject = new Project(dataId, name, 0);
  projectList.push(newProject);
  localStorage.setItem('Project List', JSON.stringify(projectList));
  displayProjectList(projectList);
  setActiveProject(name);
}

export function removeProject(itemId) {
  const projectItem = projectList.find((e) => e.id === itemId);
  const todoToRemove = todoList.filter((e) => e.project === projectItem.name);
  todoToRemove.forEach((e) => removeTodo(e.id));
  projectList.splice(
    projectList.findIndex((e) => e.id === itemId),
    1
  );
  localStorage.setItem('Project List', JSON.stringify(projectList));
  displayProjectList(projectList);
  setActiveProject(projectList[0].name);
}
export function findTodoInProject(projectName) {
  const filteredTodo = todoList.filter((e) => e.project === projectName);
  return filteredTodo;
}
