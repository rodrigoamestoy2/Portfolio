'use strict';

document.addEventListener('DOMContentLoaded', () => {



    const listcontainer = document.getElementById('list-container');
    const commentInput = document.getElementById('item');
    const addListItem = document.getElementById('agregar');
    const deletesListItem = document.getElementById('borrar');
    const titleInput = document.getElementById('ititle');
    const form = document.getElementById('form');

    // Prevent Form from Submit after Click on Button

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })

    // Adds Element to the List and Saves it in Local Storage

    addListItem.addEventListener('click', () => {
        if (titleInput.value.length >= 1) {
            listcontainer.innerHTML += `
            <div class="row">
            <div class="col col-sm-8">
                <div class="h3-container" id="title">${titleInput.value}</div>
                <div class="p-container" id="comment">${commentInput.value}</div>
            </div>
            <div class="btn-container col col-sm-4">
                <ul>
                    <li>
                        <button id="edit"><i class="fa fa-edit"></i></button>
                    </li>
                    <li>
                        <button id="done"><i class="fa fa-check"></i></button>
                    </li>   
                    <li>
                        <button id="highlight"><i class="fa fa-exclamation"></i></button>
                    </li>
                    <li>
                        <button id="delete"><i class="fa fa-times"></i></button>
                    </li>
                </ul>
            </div>
        </div>
            `
            localStorage.setItem('lista', listcontainer.innerHTML)

            // Selects Edit, Delete, Highlighter and Done Buttons

            const fadelete = listcontainer.querySelectorAll('button#delete');
            const fadone = listcontainer.querySelectorAll('button#done');
            const faEdit = listcontainer.querySelectorAll('button#edit');
            const faHighlight = listcontainer.querySelectorAll('button#highlight');
            
            // Goes trough the buttons and selects the parent of the btn where the click
            // was made. Then makes the title and comments editable and saves the results

            for (let i = 0; i < faEdit.length; i++) {

                faEdit[i].addEventListener('click', () => {
                    let title = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#title');
                    title[0].contentEditable = 'true';
                    let comment = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#comment');
                    comment[0].contentEditable = 'true';
                    title[0].style.border = '1px solid red';
                    comment[0].style.border = '1px solid red';
                    localStorage.setItem('lista', listcontainer.innerHTML);
                })
            }
            
            // Goes trough the buttons and selects the parent of the btn where the click
            // was made. Then highlights the title and saves the results

            for (let i = 0; i < faHighlight.length; i++) {

                faHighlight[i].addEventListener('click', () => {
                    let title = faHighlight[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#title');
                    title[0].style.background = "lightseagreen"; 
                    
                })

            }

            // Goes trough the buttons and selects the parent of the btn where the click
            // was made. Then makes the title and comments uneditable and saves the results

            for (let i = 0; i < fadone.length; i++) {

                fadone[i].addEventListener('click', () => {
                    let title = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#title');
                    let comment = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#comment');
                    title[0].contentEditable = 'false';
                    comment[0].contentEditable = 'false';
                    title[0].style.border = 'none';
                    comment[0].style.border = 'none';
                    localStorage.setItem('lista', listcontainer.innerHTML);
                })
            }

            // Goes trough the buttons and selects the parent of the btn where the click
            // was made. Then deletes the div and saves the results

            for (let i = 0; i < fadelete.length; i++) {

                fadelete[i].addEventListener('click', () => {
                    fadelete[i].parentElement.parentElement.parentElement.parentElement.remove();
                    localStorage.setItem('lista', listcontainer.innerHTML);
                })
            }
            return false;

            // If the Title input is empty gives an alert

    } else if (titleInput.value.length == 0) {
        window.alert('Ingrese un titulo');
        titleInput.focus();
        return false;
        }
    })

    // Deletes all the list items and clears local storage

    deletesListItem.addEventListener('click', () => {
        localStorage.clear()
        listcontainer.innerHTML = "";
    })

    // Runs when the content loads and displays the items saved (if any) in the local storage

    window.addEventListener('load', () => {
        listcontainer.innerHTML = localStorage.getItem('lista');
        const fadelete = listcontainer.querySelectorAll('button#delete');
        const faEdit = listcontainer.querySelectorAll('button#edit')
        const fadone = listcontainer.querySelectorAll('button#done')
        const faHighlight = listcontainer.querySelectorAll('button#highlight');

        // Same code of addListItem onClick

        for (let i = 0; i < faHighlight.length; i++) {

            faHighlight[i].addEventListener('click', () => {
                let title = faHighlight[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#title');
                title[0].style.background = "lightseagreen"; 
            })
        }

        for (let i = 0; i < faEdit.length; i++) {

            faEdit[i].addEventListener('click', () => {
                let title = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#title');
                title[0].contentEditable = 'true';
                let comment = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#comment');
                comment[0].contentEditable = 'true';
                localStorage.setItem('lista', listcontainer.innerHTML);
            })
        }

        for (let i = 0; i < fadone.length; i++) {

            fadone[i].addEventListener('click', () => {
                let title = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#title');
                let comment = faEdit[i].parentElement.parentElement.parentElement.parentElement.querySelectorAll('#comment');
                title[0].contentEditable = 'false';
                comment[0].contentEditable = 'false';
                localStorage.setItem('lista', listcontainer.innerHTML);
            })
        }

        for (let i = 0; i < fadelete.length; i++) {

        fadelete[i].addEventListener('click', () => {
            fadelete[i].parentElement.parentElement.parentElement.parentElement.remove();
            localStorage.setItem('lista', listcontainer.innerHTML);
        })
        }

    })
})