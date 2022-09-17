'use strict'; 

document.addEventListener('DOMContentLoaded', () => {

    const JaPBtn = document.getElementById('JaP-button'),
    JaPBtn2 = document.getElementById('JaP-button2'),
    todoListBtn = document.getElementById('todo-btn'),
    todoListBtn2 = document.getElementById('todo-btn2'),
    nasaBtn2 = document.getElementById('nasa-btn2'),
    moreBtn = document.getElementById('more-projects'),
    moreBtn2 = document.getElementById('more-projects2'),
    github = document.getElementById('github'),
    linkedin = document.getElementById('linkedin'),
    nasaBtn = document.getElementById('nasa-btn');

    JaPBtn.addEventListener('click', () => {
        window.open('https://rodrigoamestoy.github.io/Proyecto-JaP/index', '_blank');
    });
    JaPBtn2.addEventListener('click', () => {
        window.open('https://github.com/rodrigoamestoy/Proyecto-JaP', '_blank');
    });

    todoListBtn.addEventListener('click', () => {
        window.open('todo.html', '_blank');
    });
    todoListBtn2.addEventListener('click', () => {
        window.open('https://github.com/rodrigoamestoy/Projects/tree/main/11%23ToDoList', '_blank');
    });

    nasaBtn.addEventListener('click', () => {
        window.open('nasa.html', '_blank');
    });
    nasaBtn2.addEventListener('click', () => {
        window.open('https://github.com/rodrigoamestoy/Projects/tree/main/4%23NasaAPI', '_blank');
    });

    moreBtn.addEventListener('click', () => {
        window.alert('Function is under development');
    });
    moreBtn2.addEventListener('click', () => {
        window.open('https://github.com/rodrigoamestoy/Projects', '_blank')
    });

    linkedin.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/rodrigo-amestoy/', '_blank')
    });
    github.addEventListener('click', () => {
        window.open('https://github.com/rodrigoamestoy', '_blank')
    });
});