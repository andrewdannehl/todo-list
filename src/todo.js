import './styles.css';
import { closeModal } from './modal';

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
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
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
        const content = document.getElementById('content');
        content.innerHTML = this.todoItems.display();       
        closeModal();
    }

}

class projectHandler {
    constructor() {
        
    }

    handler(event) {
        event.preventDefault();
        //need to gather user input for the title
        const projectTitle = document.getElementById('projectTitle').value;
        const newProject = new project(title);//add new todo item
        projects.addItem(newProject);
        console.log(projects.display());
        //print it to console
        closeModal();
    }
}

class project {
    constructor(title) {
        this.title = title;
        this.items = [];
    }

    create() {

    }

    remove() {

    }
}

class projects {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    
    display() {
        return this.items.map(item => item.display()).join('');
    }
}

export { todo, todoItems, todoHandler, todoFormHandler, project, projects, projectHandler };