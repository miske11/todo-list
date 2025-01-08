import Project from "./project"
import Item from "./item"
export const ScreenControler =  class {
    
    drawItem(item) {
        const content = document.querySelector('.content');
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        content.appendChild(itemContainer);
        for (const value of Object.values(item)) {
            const field = document.createElement('p');
            field.textContent = value;
            itemContainer.appendChild(field);
        }
    }

    drawProject(project) {
        const content = document.querySelector('.content');
        content.textContent = '';
        for (const item of project.items) {
            this.drawItem(item);
        }
    }
}