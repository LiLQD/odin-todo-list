export function buildLayout() {
  buildSidebar();
  buildMain();
}

function buildSidebar() {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");

  const sidebarHeader = document.createElement("div");
  sidebarHeader.classList.add("sidebar-header");

  const appTitle = document.createElement("h1");
  appTitle.classList.add("app-title");
  appTitle.textContent = "Do.";
  const appSub = document.createElement("p");
  appSub.classList.add("app-sub");
  appSub.textContent = "stay sharp.";
  sidebarHeader.appendChild(appTitle);
  sidebarHeader.appendChild(appSub);

  const sidebarSection = document.createElement("div");
  sidebarSection.classList.add("sidebar-section");
  const sidebarLabel = document.createElement("span");
  sidebarLabel.classList.add("sidebar-label");
  sidebarLabel.textContent = "Projects";
  const projectList = document.createElement("ul");
  projectList.id = "project-list";
  sidebarSection.appendChild(sidebarLabel);
  sidebarSection.appendChild(projectList);

  const addProject = document.createElement("button");
  addProject.classList.add("btn-add-project");
  addProject.id = "btn-add-project";
  const plus = document.createElement("span");
  plus.textContent = "+";
  addProject.textContent = " New Project";
  addProject.appendChild(plus);

  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarSection);
  sidebar.appendChild(addProject);
  document.body.appendChild(sidebar);
}

function buildMain() {
  const main = document.createElement("main");
  main.classList.add("main");

  const mainHeader = document.createElement("div");
  mainHeader.classList.add("main-header");

  const projectTitle = document.createElement("h2");
  projectTitle.classList.add("project-title");
  projectTitle.id = "project-title";
  projectTitle.textContent = "Inbox";

  const addTodo = document.createElement("button");
  addTodo.classList.add("btn-add-todo");
  addTodo.id = "btn-add-todo";
  addTodo.textContent = "+ Add Todo";

  const todoList = document.createElement("ul");
  todoList.id = "todo-list";

  const emptyState = document.createElement("div");
  emptyState.classList.add("empty-state");
  emptyState.id = "empty-state";

  const emptyText = document.createElement("p");
  emptyText.classList.add("empty-text");
  emptyText.textContent = "Nothing here yet";

  const emptySub = document.createElement("p");
  emptySub.classList.add("empty-sub");
  emptySub.textContent = "Add a todo to get started";

  emptyState.appendChild(emptyText);
  emptyState.appendChild(emptySub);
  mainHeader.appendChild(projectTitle);
  mainHeader.appendChild(addTodo);
  main.appendChild(mainHeader);
  false ? main.appendChild(todoList) : main.appendChild(emptyState);
  document.body.appendChild(main);
}

export function buildAddProjectModal() {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.id = "modal-project-overlay";

  const modalProject = document.createElement("div");
  modalProject.classList.add("modal modal-sm");
  modalProject.id = "modal-project";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h3");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = "New Project";
  const closeProject = document.createElement("button");
  closeProject.classList.add("btn-close");
  closeProject.id = "btn-close-project";
  closeProject.textContent = "x";

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  const field = document.createElement("div");
  field.classList.add("field");
  const labelInputProjectName = document.createElement("label");
  labelInputProjectName.htmlFor = "input-project-name";
  labelInputProjectName.textContent = "Project Name";
  const inputProjectName = document.createElement("input");
  inputProjectName.id = "input-project-name";
  inputProjectName.type = "text";
  inputProjectName.placeholder = "e.g. Work, Personal...";

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");
  const cancelProjectBtn = document.createElement("button");
  cancelProjectBtn.classList.add("btn-cancel");
  cancelProjectBtn.id = "btn-cancel-project";
  cancelProjectBtn.textContent = "Cancel";

  const submitProjectBtn = document.createElement("button");
  submitProjectBtn.classList.add("btn-submit");
  submitProjectBtn.id = "btn-submit-project";
  submitProjectBtn.textContent = "Create";

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeProject);
  field.appendChild(labelInputProjectName);
  field.appendChild(inputProjectName);
  modalBody.appendChild(field);
  modalProject.appendChild(modalHeader);
  modalProject.appendChild(modalBody);
  modalOverlay.appendChild(modalProject);
  document.body.appendChild(modalOverlay);
}

export function buildAddTodoModal() {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.id = "modal-todo-overlay";
  const modalTodo = document.createElement("div");
  modalTodo.classList.add("modal");
  modalTodo.id = "modal";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("h3");
  modalTitle.classList.add("modal-title");
  modalTitle.id = "modal-title";
  modalTitle.textContent = "New Todo";
  const modalCloseBtn = document.createElement("button");
  modalCloseBtn.classList.add("btn-close");
  modalCloseBtn.id = "btn-close-modal";
  modalCloseBtn.textContent = "x";

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const titleField = document.createElement("div");
  titleField.classList.add("field");
  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "input-title";
  titleLabel.textContent = "Title";
  const titleInput = document.createElement("input");
  titleInput.id = "input-title";
  titleInput.type = "text";
  titleInput.placeholder = "What needs to be done?";

  const descriptionField = document.createElement("div");
  descriptionField.classList.add("field");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "input-desc";
  descriptionLabel.textContent = "Description";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "input-desc";
  descriptionInput.placeholder = "Add some details...";
  descriptionInput.rows = "3";

  const dateFieldRow = document.createElement("div");
  dateFieldRow.classList.add("field-row");
  const dateField = document.createElement("div");
  dateField.classList.add("field");
  const dateLabel = document.createElement("label");
  dateLabel.htmlFor = "input-due";
  dateLabel.textContent = "Due Date";
  const dateInput = document.createElement("input");
  dateInput.id = "input-due";
  dateInput.type = "date";

  const priorityField = document.createElement("div");
  priorityField.classList.add("field");
  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "input-priority";
  priorityLabel.textContent = "Priority";
  const priorityInput = document.createElement("select");
  priorityInput.id = "input-priority";
  priorityInput.innerHTML = `
  <option value="low">Low</option>
  <option value="medium" selected>Medium</option>
  <option value="high">High</option>
`;

  const noteField = document.createElement("div");
  noteField.classList.add("field");
  const noteLabel = document.createElement("label");
  noteLabel.htmlFor = "input-notes";
  noteLabel.textContent = "Notes";
  const noteInput = document.createElement("textarea");
  noteInput.id = "input-notes";
  noteInput.placeholder = "Any extra notes...";
  noteInput.rows = "2";

  const projectField = document.createElement("div");
  projectField.classList.add("field");
  const projectLabel = document.createElement("label");
  projectLabel.htmlFor = "input-project";
  projectLabel.textContent = "Project";
  const projectInput = document.createElement("select");
  projectInput.id = "input-project";

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("btn-cancel");
  cancelBtn.id = "btn-cancel";
  cancelBtn.textContent = "Cancel";
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("btn-submit");
  submitBtn.id = "btn-submit";
  submitBtn.textContent = "Add Todo";

  titleField.appendChild(titleLabel);
  titleField.appendChild(titleInput);
  descriptionField.appendChild(descriptionLabel);
  descriptionField.appendChild(descriptionInput);
  dateField.appendChild(dateLabel);
  dateField.appendChild(dateInput);
  dateFieldRow.appendChild(dateField);
  dateFieldRow.appendChild(priorityField);
  priorityField.appendChild(priorityLabel);
  priorityField.appendChild(priorityInput);
  noteField.appendChild(noteLabel);
  noteField.appendChild(noteInput);

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalCloseBtn);
  modalBody.appendChild(titleField);
  modalBody.appendChild(dateFieldRow);
  modalBody.appendChild(priorityField);
  modalBody.appendChild(noteField);
  modalBody.appendChild(projectField);
  modalFooter.appendChild(cancelBtn);
  modalFooter.appendChild(submitBtn);

  modalTodo.appendChild(modalHeader);
  modalTodo.appendChild(modalBody);
  modalTodo.appendChild(modalFooter);
  modalOverlay.appendChild(modalTodo);

  document.body.appendChild(modalOverlay);
}
