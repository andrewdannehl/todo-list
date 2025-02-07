import './styles.css';
import { openModal, closeModal } from './modal.js';
import { todo, todoItems, todoHandler, todoFormHandler, project, projects, projectHandler } from './todo.js';

const openModalBtn = document.createElement('button');
const closeModalBtn = document.querySelector('.btn-close');
const newProjectBtn = document.querySelector('#new-project');
const header = document.getElementById('header');
const submit = document.querySelector('.submit');

openModalBtn.classList.add('.btn-open');
openModalBtn.innerHTML = 'New Todo';

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

const formElement = document.getElementById('addTodo');
const formHandler = new todoFormHandler(formElement);
const content = document.getElementById('content');
const categories = document.getElementById('projects');

const allTodoItems = new todoItems();
const allProjects = new projects();
const newProject = new projectHandler(allProjects);
const newTodo = new todoHandler(allTodoItems, formHandler);

submit.addEventListener('click', newTodo.handler.bind(newTodo));
newProjectBtn.addEventListener('click', newProject.handler.bind(newProject));

content.addEventListener('click', (event) => {
   if (event.target.classList.contains('remove')) {
        const index = event.target.id;
        allTodoItems.removeItem(event, index);
        renderContent();
    }
});

categories.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-project')) {
         const index = event.target.id;
         allProjects.remove(event, index);
         renderContent();
     }
 });

function renderContent() {
    content.innerHTML = '';
    categories.innerHTML = '';
    content.innerHTML = allTodoItems.display();
    categories.innerHTML = allProjects.display();
}

//initial render
header.appendChild(openModalBtn);
renderContent();


export { renderContent }