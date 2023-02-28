const ToDoItems = class items {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.descriptiton = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  items = [];

  generateItems(num) {
    const container = document.querySelectorAll(".container");

    for (let i = 0; i < num; i++) {
      const loop = new ToDoItems(
        "play",
        "may",
        "ayyyyyy",
        "anata",
        "babilion",
        "fex"
      );
      items.push(loop);
    }
    return;
  }

  /**
   *
   * @param {Array} arg this is an arroy of items the function will create recreate with html on the page
   */
  render(arg) {
    const container = document.querySelectorAll(".container");

    arg.forEach((element) => {
      const itemcontainer = document.createElement("div");
      const title = document.createTextNode("element.title");
      const description = document.createTextNode("element.descriptiton");
      const dueDate = document.createTextNode("element.dueDate");
      const priority = document.createTextNode("element.priority");
      const notes = document.createTextNode("element.notes");
      const checklist = document.createTextNode("element.checklist");

      const create = document.createElement("p");
      create.appendChild(
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
      );
    });
  }
};

const new1 = new ToDoItems(
  "ueoau",
  "uheoaa",
  "2020-01-01",
  "low",
  "uhoho's notes",
  "uhoho's checklist"
);
new1.generateItems(5);

new1.render(new1.items);
