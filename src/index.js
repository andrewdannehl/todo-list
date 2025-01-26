import './styles.css';
import { openModal, closeModal } from './modal.js';
import { todo, todoItems, todoHandler, project, projects } from './todo.js';

const openModalBtn = document.createElement('button');
const closeModalBtn = document.querySelector('.btn-close');
const header = document.getElementById('header');

const submit = document.querySelector('.submit');
const todoItemsInstance = new todoItems();
const allTodoItems = new todoItems();
const newTodo = new todoHandler(todoItemsInstance);

openModalBtn.classList.add('.btn-open');
openModalBtn.innerHTML = 'New Todo';

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

submit.addEventListener('click', (event) => {
    newTodo.handler.bind(newTodo);
    renderContent();
})




header.appendChild(openModalBtn);

function renderContent() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.innerHTML = todoItemsInstance.display()
    //render based on active view
}

function setActiveView() {
    
}

//initial render


//listenders for different renders