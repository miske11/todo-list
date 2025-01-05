import Item from "./item"
import Project from "./project.js"

const item1 = new Item('test', 'testing item', '5.1.2025', 'low');
item1.check();
console.log(item1);

const project = new Project('my project', 'this is just a test project');
project.addItem(item1);
project.addItem(item1);
project.addItem(item1);
project.addItem(item1);
project.removeItem(2)

console.log(project);