export default class Item {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  check() {
    if (this.completed)
      this.completed = false;
    else
      this.completed = true;
  }

}
