import './styles.css';
import { openModal, closeModal } from './modal.js';
import { todo, todoItems, todoHandler, todoFormHandler, project, projects, projectHandler } from './todo.js';

const openModalBtn = document.createElement('button');
const closeModalBtn = document.querySelector('.btn-close');
const header = document.getElementById('header');
const submit = document.querySelector('.submit');

openModalBtn.classList.add('.btn-open');
openModalBtn.innerHTML = 'New Todo';

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

const formElement = document.getElementById('addTodo');
const formHandler = new todoFormHandler(formElement);
const content = document.getElementById('content');

//instance of todo items
const allTodoItems = new todoItems();
const newTodo = new todoHandler(allTodoItems, formHandler);

submit.addEventListener('click', newTodo.handler.bind(newTodo));
//why doesn't this work???
//content.addEventListener('click', allTodoItems.removeItem.bind(event));

content.addEventListener('click', (event) => {
   if (event.target.classList.contains('remove')) {
        const index = event.target.id;
        allTodoItems.removeItem(event, index);
        renderContent();
    }
});


header.appendChild(openModalBtn);

function renderContent() {
    content.innerHTML = '';
    content.innerHTML = allTodoItems.display();
}

//initial render
renderContent();


export { renderContent }