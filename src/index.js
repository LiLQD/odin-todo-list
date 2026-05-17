import "./styles.css";
import {
  buildLayout,
  buildAddProjectModal,
  buildAddTodoModal,
} from "./render.js";
import { createTodo, isEmptyList } from "./todo.js";
import { projectList } from "./project.js";



console.log("Test Connection");

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
