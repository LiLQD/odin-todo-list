import "./styles.css";
import {
  buildLayout,
  buildAddProjectModal,
  buildAddTodoModal,
} from "./render.js";
import { createTodo, isEmptyList } from "./todo.js";
console.log("Test Connection");
export let activeProject = "Defualt";
export function setActiveProject(name){
  activeProject = name;
}
buildLayout();
const newProjectBtn = document.querySelector("#btn-add-project");
newProjectBtn.addEventListener("click", () => {
  console.log("New Project");
  buildAddProjectModal();
});
const addTodoBtn = document.querySelector("#btn-add-todo");
addTodoBtn.addEventListener("click", () => {
  console.log("New todo");
  buildAddTodoModal();
});
