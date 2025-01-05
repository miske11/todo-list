import Item from "./item.js"

export default class Project {
    items = [];
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }
}