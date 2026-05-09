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

