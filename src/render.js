export function buildLayout() {
  buildSidebar();
  buildMain()
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
  addProject.appendChild(plus);
  addProject.textContent = " New Project";

  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarSection);
  sidebar.appendChild(addProject);
  document.body.appendChild(sidebar);
}

function buildMain(){
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
  false? main.appendChild(todoList) : main.appendChild(emptyState);
  document.body.appendChild(main);
}

export function buildAddProjectModal(){
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    modalOverlay.id = "modal-overlay";

    const modalProject = document.createElement("div");
    modalProject.classList.add("modal modal-sm");
    modalProject.id = "modal-overlay";
    
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
    inputProjectName.placeholder = "e.g. Work, Personal..."

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    const cancelProjectBtn = document.createElement("button");
    cancelProjectBtn.classList.add("btn-cancel");
    cancelProjectBtn.id = "btn-cancel-project"
    cancelProjectBtn.textContent = "Cancel";

    const submitProjectBtn = document.createElement("button");
    submitProjectBtn.classList.add("btn-submit");
    submitProjectBtn.id = "btn-submit-project"
    submitProjectBtn.textContent = "Create";

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeProject);
    field.appendChild(labelInputProjectName);
    field.appendChild(inputProjectName);
    modalBody.appendChild(field);
    modalProject.appendChild(modalHeader);
    modalProject.appendChild(modalBody);
    modalOverlay.appendChild(modalProject);
    document.appendChild(modalOverlay);
}

