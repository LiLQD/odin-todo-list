import "./styles.css";
import { buildLayout, buildAddProjectModal, buildAddTodoModal, closeModal } from "./render.js";
console.log("Test Connection");


buildLayout();
const newProjectBtn = document.querySelector("#btn-add-project");
newProjectBtn.addEventListener("click", () => {
    buildAddProjectModal();
    const closeBtn = document.querySelectorAll(".btn-close, .btn-cancel")
    closeBtn.forEach(btn => {
        btn.addEventListener("click", closeModal)
    });
});
const addTodoBtn = document.querySelector("#btn-add-todo");
addTodoBtn.addEventListener("click", () => {
    buildAddTodoModal();
    const closeBtn = document.querySelectorAll(".btn-close, .btn-cancel")
    closeBtn.forEach(btn => {
        btn.addEventListener("click", closeModal)
    });
});