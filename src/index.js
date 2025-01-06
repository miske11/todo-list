import Item from "./item";
import Project from "./project.js";
import "./style.css";
import { ScreenControler } from "./screen.js";

const item1 = new Item('test', 'testing item', '5.1.2025', 'low');
const item2 = new Item('test2', 'testing item2', '5.1.2025', 'low');
const item3 = new Item('test3', 'testing item3', '5.1.2025', 'high');

const project = new Project('my project', 'this is just a test project');
project.addItem(item1);
project.addItem(item2);
project.addItem(item3);

const sc = new ScreenControler();
sc.drawProject(project);

const addItemBtn = document.querySelector('.addItem');
addItemBtn.addEventListener('click', () => {
    const content = document.querySelector('.conent');
    content.textContent = '';
})
