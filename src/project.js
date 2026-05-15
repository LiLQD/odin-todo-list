import { todoList } from "./todo.js";
import { displayProjectList } from "./render.js";
export const projectList = [
  { id: crypto.randomUUID(), name: "Defualt", count: 5 },
  { id: crypto.randomUUID(), name: "Template", count: 2 },
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
  const name = document.querySelector("#input-project-name").value;

  const newProject = new Project(dataId, name, 0);
  projectList.push(newProject);
  console.log(projectList);
  displayProjectList(projectList);
}

export function findTodoInProject(projectName){
  const filteredTodo = todoList.filter(e => e.project === projectName);
  console.log(filteredTodo);
  return filteredTodo;
}