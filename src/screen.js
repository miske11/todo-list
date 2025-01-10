import Project from "./project"
import Item from "./item"
import { state } from "./index";


export const ScreenControler =  class {
    
    drawItem(item) {
        const content = document.querySelector('.tasks');
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        content.appendChild(itemContainer);
        for (const value of Object.values(item)) {
            const field = document.createElement('p');
            field.textContent = value;
            itemContainer.appendChild(field);
        }
    }

    drawProjectTitle(project) {
        const titles = document.querySelector('.projects');
        const projectTitle = document.createElement('p');
        projectTitle.textContent = project.name;
        titles.appendChild(projectTitle);

        projectTitle.addEventListener('click', () => {
            state.selectedProject = project;
            this.drawProjectItems(state.selectedProject);
            console.log(state.selectedProject);
        })
    }

    drawProjectItems(project) {
        const content = document.querySelector('.tasks');
        content.textContent = '';
        for (const item of project.items) {
            this.drawItem(item);
        }
    }

    displayProjectTitles(projects) {
        const titles = document.querySelector('.projects');
        titles.textContent = '';
        for (const project of projects) {
            this.drawProjectTitle(project);
        }
    }


}