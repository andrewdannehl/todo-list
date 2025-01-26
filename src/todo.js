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



class todoHandler {
    constructor(todoItemsInstance) {
        this.todoItems = todoItemsInstance;
    }
    
    handler(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const notes = document.getElementById('notes').value;
        const checklist = document.getElementById('checklist').value;

        const newTodo = new todo(title, description, dueDate, priority, notes, checklist);
        this.todoItems.addItem(newTodo);
        this.todoItems.display()

        const card = document.createElement('div');
        card.classList.add('todo-card');
        
        
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

export { todo, todoItems, todoHandler, project, projects, projectHandler };