import './styles.css';
import { closeModal } from './modal';
import { renderContent } from './index.js';

class todo {
    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }

    display() {
        return `
            <div class="todo-card">
                <h4>${this.title}</h4>
                <p>${this.description}</p>
                ${this.dueDate}<br>
                ${this.priority}<br>
                ${this.notes}<br>
                ${this.checklist}<br>
                <button class="remove">Remove Todo</button>
            </div>
        `;
    }

    completed() {
        //will need event listener for button
    }

    toggleDetails() {

    }
}

class todoItems {
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        this.items = savedItems.map(item => new todo(item.title, item.description, item.dueDate, item.priority, item.notes, item.checklist));
    }

    addItem(item) {
        this.items.push(item);
        localStorage.setItem('todoItems', JSON.stringify(this.items)); 
    }
    
    removeItem(event, index) {
        if (event.target.classList.contains('remove')) {
            const index = event.target.id;
            this.items.splice(index, 1);
            localStorage.setItem('todoItems', JSON.stringify(this.items)); 
        }
    }

    display() {
        return this.items.map(item => item.display()).join('');
    }

}

class todoFormHandler {
    constructor(formElement) {
        this.form = formElement;
    }

    getFormData() {
        const title = this.form.querySelector('#title').value;
        const description = this.form.querySelector('#description').value;
        const dueDate = this.form.querySelector('#dueDate').value;
        const priority = this.form.querySelector('#priority').value;
        const notes = this.form.querySelector('#notes').value;
        const checklist = this.form.querySelector('#checklist').value;
        return { title, description, dueDate, priority, notes, checklist };
    }

    createTodo() {
        const { title, description, dueDate, priority, notes, checklist } = this.getFormData();
        return new todo(title, description, dueDate, priority, notes, checklist);
    }
}

class todoHandler {
    constructor(allTodoItems, formHandler) {
        this.todoItems = allTodoItems;
        this.formHandler = formHandler;
    }    

    handler(event) {
        event.preventDefault();
        const newTodo = this.formHandler.createTodo();        
        this.todoItems.addItem(newTodo);
        //addLocalStorage(newTodo)
        renderContent();
        closeModal();
    }

}

class projectHandler {
    constructor(allProjects) {
        this.allProjects = allProjects;
    }

    handler(event) {
        event.preventDefault();
        //need to gather user input for the title
        let userInput = prompt("Please enter category name:");
        let projectTitle = userInput;
        const newProject = new project(projectTitle);
        this.allProjects.addItem(newProject);
        renderContent();
        //print it to console
        //closeModal();
    }
}

class project {
    constructor(title) {
        this.title = title;
    }

    display() {
        return `           
            <div class="project">
            <div class="wrapper">
                <div>${this.title}</div>
                <button class='remove-project'>X</button>
            </div>
        </div>
        `;
    }
}

class projects {
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('projectItems')) || [];
        this.items = savedItems.map(item => new project(item.title));
    }

    addItem(item) {
        this.items.push(item);
        localStorage.setItem('projectItems', JSON.stringify(this.items)); 
    }

    remove(event, index) {
        if (event.target.classList.contains('remove-project')) {
            const index = event.target.id;
            this.items.splice(index, 1);
            localStorage.setItem('projectItems', JSON.stringify(this.items)); 
        }
    }

    display() {
        return this.items.map(item => item.display()).join('');
    }
}

export { todo, todoItems, todoHandler, todoFormHandler, project, projects, projectHandler };