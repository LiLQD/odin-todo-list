export function buildLayout() {
  buildSidebar();
  
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

