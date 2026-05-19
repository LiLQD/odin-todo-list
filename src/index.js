import './styles.css';
import {
  buildLayout,
  buildAddProjectModal,
  buildAddTodoModal,
} from './render.js';

buildLayout();
const newProjectBtn = document.querySelector('#btn-add-project');
newProjectBtn.addEventListener('click', () => {
  buildAddProjectModal();
});
const addTodoBtn = document.querySelector('#btn-add-todo');
addTodoBtn.addEventListener('click', () => {
  buildAddTodoModal();
});
