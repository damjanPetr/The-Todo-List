const Projects = (function name(params) {
  const projectsArray = [];
  const createProject = function (params) {
    const newprojectobjet = {
      name: params,
      newproject: [],
    };
    projectsArray.push(newprojectobjet);
  };
  return;
})();

const domManipulation = (function domManipulation(arg) {
  const arrayToDoItems = [];
  function populateArray(num) {
    arrayToDoItems.push(num);
    return;
  }
  function renderOnScreen(arg) {
    const container = document.querySelector(".container");
    arg.forEach((element) => {
      const itemcontainer = document.createElement("div");
      itemcontainer.classList.add("item-container");

      const title = element.title;
      const description = element.descriptiton;
      const dueDate = element.dueDate;
      const priority = element.priority;
      const notes = element.notes;
      const checklist = element.checklist;

      const textnodes = [
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
      ];

      /**
       *
       * @param {Array} array from textnote that is used to create paragraph
       */

      function makeDomElement(array) {
        for (let index = 0; index < array.length; index++) {
          const element = array[index];

          const domElement = document.createElement("p");

          domElement.textContent = element;
          itemcontainer.append(domElement);
        }
        const removeElementBtn = document.createElement("button");
        itemcontainer.append(removeElementBtn);
        removeElementBtn.classList.add("remove-btn");
        removeElementBtn.textContent = "x";
        removeElementBtn.addEventListener("click", (e) => {
          e.preventDefault();
          container.removeChild(itemcontainer);
        });
      }

      makeDomElement(textnodes);
      container.appendChild(itemcontainer);
    });
  }

  return { render: renderOnScreen, populateArray, arrayToDoItems };
})();

const ToDoItems = class items {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.descriptiton = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
  removeToDoItem() {}
};

const try1 = new ToDoItems(
  "go rest",
  "this is blalabal",
  "in 39 days",
  "ULTRA",
  "notes:bleh",
  "checked"
);

domManipulation.populateArray(try1);
domManipulation.render(domManipulation.arrayToDoItems);
