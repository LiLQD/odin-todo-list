import "./styles.css";
import {
  buildLayout,
  buildAddProjectModal,
  buildAddTodoModal,
} from "./render.js";
import { createTodo, isEmptyList } from "./todo.js";
console.log("Test Connection");
export let activeProject = localStorage.getItem("Active Project")|| "Default";
export function setActiveProject(name){
  activeProject = name;
  localStorage.setItem("Active Project", activeProject);
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
