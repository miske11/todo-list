import Item from "./item";
import Project from "./project.js";
import "./style.css";
import { ScreenControler } from "./screen.js";

const projects = [];

const project = new Project("my project", "this is just an example project");
const item = new Item('ssad', 'dsad', 'dsad', 'dsad');
project.addItem(item);

projects.push(project);

export const state = {
  selectedProject: projects[0],
};

const sc = new ScreenControler();
sc.drawProjectTitle(project);
sc.drawProjectItems(project);

const itemDialog = document.querySelector("#addItemDialog");

const addItemBtn = document.querySelector(".addItem");

addItemBtn.addEventListener("click", () => {
  itemDialog.showModal();
});

itemDialog.addEventListener("close", () => {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#desc").value;
  const dueDate = document.querySelector("#dueDate").value;
  const priority = document.querySelector("#priority").value;
  const item = new Item(title, description, dueDate, priority);

  state.selectedProject.addItem(item);
  sc.drawProjectItems(state.selectedProject);
});

const projectDialog = document.querySelector("#addProjectDialog");

const addProjectBtn = document.querySelector(".addProject");
addProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

projectDialog.addEventListener("close", () => {
  const title = document.querySelector("#projTitle").value;
  const description = document.querySelector("#projDesc").value;
  const project = new Project(title, description);
  projects.push(project); 
  sc.displayProjectTitles(projects);
  console.log(project);
});
