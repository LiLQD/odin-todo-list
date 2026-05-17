export let activeProject = localStorage.getItem("Active Project")|| "Default";
export function setActiveProject(name){
  activeProject = name;
  localStorage.setItem("Active Project", activeProject);
}