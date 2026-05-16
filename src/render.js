import {
  isEmptyList,
  removeTodo,
  createTodo,
  editTodo,
  todoList,
} from "./todo.js";
import { createProject, findTodoInProject, localProjectList, projectList } from "./project.js";
import { activeProject, setActiveProject } from "./index.js";
function el(tag, { id, classes, text, attrs } = {}) {
  const node = document.createElement(tag);
  if (id) node.id = id;
  if (classes) node.classList.add(...classes);
  if (text) node.textContent = text;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => (node[k] = v));
  return node;
}

function append(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
  return parent;
}

function field({ labelFor, labelText, input }) {
  const wrapper = el("div", { classes: ["field"] });
  const label = el("label", { text: labelText, attrs: { htmlFor: labelFor } });
  return append(wrapper, label, input);
}

function modalShell({
  overlayId,
  modalId,
  modalClasses,
  titleText,
  closeBtnId,
}) {
  const overlay = el("div", { id: overlayId, classes: ["modal-overlay"] });
  const modal = el("div", { id: modalId, classes: modalClasses });
  const header = el("div", { classes: ["modal-header"] });
  const title = el("h3", { classes: ["modal-title"], text: titleText });
  const closeBtn = el("button", {
    id: closeBtnId,
    classes: ["btn-close"],
    text: "x",
  });
  append(header, title, closeBtn);
  append(modal, header);
  append(overlay, modal);
  return { overlay, modal, header };
}

function modalFooterShell({ cancelId, cancelText, submitId, submitText }) {
  const footer = el("div", { classes: ["modal-footer"] });
  const cancelBtn = el("button", {
    id: cancelId,
    classes: ["btn-cancel"],
    text: cancelText,
  });
  const submitBtn = el("button", {
    id: submitId,
    classes: ["btn-submit"],
    text: submitText,
  });
  return append(footer, cancelBtn, submitBtn);
}

function renderProjectSelect(node) {
  projectList.forEach((e) => {
    const projectItem = el("option", {
      text: e.name,
      attrs: { value: e.name },
    });
    node.appendChild(projectItem);
  });
}
export function buildLayout() {
  document.body.textContent = "";
  buildSidebar();
  buildMain();
  displayTodoList(findTodoInProject(activeProject));
  displayProjectList(projectList);
}

function buildSidebar() {
  const sidebar = el("aside", { classes: ["sidebar"] });

  const sidebarHeader = el("div", { classes: ["sidebar-header"] });
  const appTitle = el("h1", { classes: ["app-title"], text: "Do." });
  const appSub = el("p", { classes: ["app-sub"], text: "stay sharp." });
  append(sidebarHeader, appTitle, appSub);

  const sidebarSection = el("div", { classes: ["sidebar-section"] });
  const sidebarLabel = el("span", {
    classes: ["sidebar-label"],
    text: "Projects",
  });
  const projectList = el("ul", { id: "project-list" });
  append(sidebarSection, sidebarLabel, projectList);

  const addProject = el("button", {
    id: "btn-add-project",
    classes: ["btn-add-project"],
  });
  const plus = el("span", { text: "+" });
  addProject.textContent = " New Project";
  addProject.appendChild(plus);

  append(sidebar, sidebarHeader, sidebarSection, addProject);
  document.body.appendChild(sidebar);
}

function buildMain() {
  const main = el("main", { classes: ["main"] });

  const mainHeader = el("div", { classes: ["main-header"] });
  const projectTitle = el("h2", {
    id: "project-title",
    classes: ["project-title"],
    text: "Inbox",
  });
  const addTodo = el("button", {
    id: "btn-add-todo",
    classes: ["btn-add-todo"],
    text: "+ Add Todo",
  });
  append(mainHeader, projectTitle, addTodo);

  const todoContainer = el("ul", { id: "todo-list" });

  const emptyState = el("div", { id: "empty-state", classes: ["empty-state"] });
  const emptyText = el("p", {
    classes: ["empty-text"],
    text: "Nothing here yet",
  });
  const emptySub = el("p", {
    classes: ["empty-sub"],
    text: "Add a todo to get started",
  });
  append(emptyState, emptyText, emptySub);

  append(main, mainHeader);
  isEmptyList()
    ? main.appendChild(emptyState)
    : main.appendChild(todoContainer);
  document.body.appendChild(main);
}

export function buildAddProjectModal(project = null) {
  const isEditMode = project !== null;

  const { overlay, modal } = modalShell({
    overlayId: "modal-project-overlay",
    modalId: "modal-project",
    modalClasses: ["modal", "modal-sm"],
    titleText: isEditMode ? "Edit Project" : "New Project",
    closeBtnId: "btn-close-project",
  });

  const inputProjectName = el("input", {
    id: "input-project-name",
    attrs: { type: "text", placeholder: "e.g. Work, Personal..." },
  });
  const modalBody = el("div", { classes: ["modal-body"] });
  append(
    modalBody,
    field({
      labelFor: "input-project-name",
      labelText: "Project Name",
      input: inputProjectName,
    }),
  );

  const footer = modalFooterShell({
    cancelId: "btn-cancel-project",
    cancelText: "Cancel",
    submitId: "btn-submit-project",
    submitText: isEditMode ? "Save" : "Create",
  });

  append(modal, modalBody, footer);
  document.body.appendChild(overlay);
  overlay.classList.add("modal-overlay", "open");
  addCloseBtn();
  if (!isEditMode) addSubmitBtn();
}

export function buildAddTodoModal(todo = null) {
  const isEditMode = todo !== null;

  const { overlay, modal } = modalShell({
    overlayId: "modal-todo-overlay",
    modalId: "modal",
    modalClasses: ["modal"],
    titleText: isEditMode ? "Edit Todo" : "New Todo",
    closeBtnId: "btn-close-modal",
  });

  // Fields
  const titleInput = el("input", {
    id: "input-title",
    attrs: { type: "text", placeholder: "What needs to be done?" },
  });

  const descInput = el("textarea", {
    id: "input-desc",
    attrs: { placeholder: "Add some details...", rows: "3" },
  });

  const dateInput = el("input", { id: "input-due", attrs: { type: "date" } });
  console.log(dateInput);
  const priorityInput = el("select", { id: "input-priority" });
  priorityInput.innerHTML = `
    <option value="low">Low</option>
    <option value="medium" selected>Medium</option>
    <option value="high">High</option>
  `;

  const noteInput = el("textarea", {
    id: "input-notes",
    attrs: { placeholder: "Any extra notes...", rows: "2" },
  });

  // const projectInput = el("select", { id: "input-project" });
  // renderProjectSelect(projectInput);
  // Date + Priority row
  const dateFieldRow = el("div", { classes: ["field-row"] });
  const dateField = field({
    labelFor: "input-due",
    labelText: "Due Date",
    input: dateInput,
  });
  const priorityField = field({
    labelFor: "input-priority",
    labelText: "Priority",
    input: priorityInput,
  });

  const modalBody = el("div", { classes: ["modal-body"] });

  const footer = modalFooterShell({
    cancelId: "btn-cancel",
    cancelText: "Cancel",
    submitId: "btn-submit",
    submitText: isEditMode ? "Save Todo" : "Add Todo",
  });
  if (isEditMode) {
    titleInput.value = todo.title;
    descInput.value = todo.desc;
    dateInput.value = todo.due;
    priorityInput.value = todo.priority.replace("priority-", "");
    noteInput.value = todo.notes;
    // projectInput.value = todo.project;
  }
  append(dateFieldRow, dateField, priorityField);
  append(
    modalBody,
    field({ labelFor: "input-title", labelText: "Title", input: titleInput }),
    field({
      labelFor: "input-desc",
      labelText: "Description",
      input: descInput,
    }),
    dateFieldRow,
    field({ labelFor: "input-notes", labelText: "Notes", input: noteInput }),
    // field({
    //   labelFor: "input-project",
    //   labelText: "Project",
    //   input: projectInput,
    // }),
  );
  append(modal, modalBody, footer);
  document.body.appendChild(overlay);
  overlay.classList.add("modal-overlay", "open");
  addCloseBtn();
  if (!isEditMode) addSubmitBtn(true);
}

export function closeModal() {
  const currentModal = document.querySelector(".modal-overlay.open");
  document.body.removeChild(currentModal);
}

function buildTodo(dataId, title, due, priority) {
  const todoCard = el("li", {
    classes: ["todo-card", priority],
  });
  todoCard.dataset.id = dataId;
  const todoCheck = el("input", {
    classes: ["todo-check"],
    attrs: { type: "checkbox" },
  });
  const info = el("div", { classes: ["todo-info"] });
  const todoTitle = el("span", { classes: ["todo-title"], text: title });
  const todoDue = el("span", { classes: ["todo-due"], text: due });
  append(info, todoTitle, todoDue);
  const action = el("div", { classes: ["todo-actions"] });
  const expandBtn = el("span", { classes: ["btn-expand"], text: "↗" });
  const deleteBtn = el("span", { classes: ["btn-delete"], text: "✕" });
  append(action, expandBtn, deleteBtn);
  append(todoCard, todoCheck, info, action);
  const todoContainer = document.querySelector("#todo-list");
  todoContainer.appendChild(todoCard);
}
export function displayTodoList(list) {
  const todoContainer = document.querySelector("#todo-list");
  todoContainer.textContent = "";
  list.forEach((e) => {
    buildTodo(e.id, e.title, e.due, e.priority);
  });
  const deleteBtn = document.querySelectorAll(".btn-delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const todoCard = btn.parentNode.parentNode;
      console.log(todoCard);
      removeTodo(todoCard.dataset.id);
    });
  });
  const expandBtn = document.querySelectorAll(".btn-expand");
  expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const todo = btn.parentNode.parentNode.dataset.id;
      const todoIndex = list.findIndex((e) => e.id === todo);
      console.log(todoIndex);
      buildAddTodoModal(list[todoIndex]);
      const saveBtn = document.querySelector("#btn-submit");
      saveBtn.addEventListener("click", () => {
        editTodo(list[todoIndex]);
        closeModal();
        displayTodoList(findTodoInProject(list[todoIndex].project));
      });
    });
  });
}

function buildProject(dataId, name, count) {
  const projectItem = el("li", { classes: ["project-item", activeProject === name ? "active" : null] });
  projectItem.dataset.id = dataId;
  const projectDot = el("span", { classes: ["project-dot"] });
  const projectName = el("span", { classes: ["project-name"], text: name });
  const projectCount = el("span", { classes: ["project-count"], text: count });

  append(projectItem, projectDot, projectName, projectCount);
  const projectContainer = document.querySelector("#project-list");
  projectContainer.appendChild(projectItem);
}

export function displayProjectList(list) {
  const projectContainer = document.querySelector("#project-list");
  projectContainer.textContent = "";
  list.forEach((e) => {
    buildProject(e.id, e.name, e.count);
  });
  const items = document.querySelectorAll(".project-item");
  items.forEach((e) => {
    e.addEventListener("click", () => {
      const itemId = e.dataset.id;
      const itemIndex = projectList.findIndex((item) => item.id === itemId);
      displayTodoList(findTodoInProject(projectList[itemIndex].name));
      setActiveProject(projectList[itemIndex].name);
      document.querySelector(".project-item.active").classList.remove("active");
      e.classList.add("active");
    });
  });
}

function addCloseBtn() {
  const closeBtn = document.querySelectorAll(".btn-close, .btn-cancel");
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
}
function addSubmitBtn(todo = false) {
  const isTodo = todo !== false;
  const submitBtn = document.querySelector(".btn-submit");
  submitBtn.addEventListener("click", () => {
    isTodo ? createTodo() : createProject();
    closeModal();
  });
}
