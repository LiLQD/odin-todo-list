import "./styles.css";
import {
  buildLayout,
  buildAddProjectModal,
  buildAddTodoModal,
  closeModal,
  buildTodo,
} from "./render.js";
import { createTodo, isEmptyList } from "./todo.js";
console.log("Test Connection");

buildLayout();
const newProjectBtn = document.querySelector("#btn-add-project");
newProjectBtn.addEventListener("click", () => {
  console.log("New Project");
  buildAddProjectModal();
  const closeBtn = document.querySelectorAll(".btn-close, .btn-cancel");
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
});
const addTodoBtn = document.querySelector("#btn-add-todo");
addTodoBtn.addEventListener("click", () => {
  console.log("New todo");
  buildAddTodoModal();
  const closeBtn = document.querySelectorAll(".btn-close, .btn-cancel");
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
  const addBtn = document.querySelector("#btn-submit");
  addBtn.addEventListener("click", () => {
    createTodo();
    closeModal();
  });
});
