document.addEventListener('DOMContentLoaded', () => {

        const URL = 'https://images-api.nasa.gov/search?q=' + localStorage.getItem('info');
        const REQUEST = new XMLHttpRequest();
        REQUEST.open('GET', URL);
        REQUEST.responseType = 'json';
        REQUEST.send();

        REQUEST.onload = function() {
        const URL_RESPONSE = REQUEST.response;
        itemsInfo(URL_RESPONSE); 
        } 

        const input = document.getElementById('inputBuscar');
        const addBtn = document.getElementById('btnBuscar');

        addBtn.addEventListener('click', () => {
           localStorage.setItem('info', input.value);
           window.location.reload();
        }) 
        
        function itemsInfo(jsonObj) {
            let item = jsonObj.collection.items; 
            let col = "";
            const itemContainer = document.getElementById('contenedor');
            console.log(item)

            for (let i = 0; i < item.length; i++) {

            
             //   console.log(i)

             if (item[i].links) {

                col += `
                <div class="col-sm-4">
                <div class="card">
                <img class="card-img-top" src="${item[i].links[0].href}" alt="${item[i].data[0].title}">
                <figcaption style="font-weight: bold;">Taken On: ${item[i].data[0].date_created}</figcaption>
                <div class="card-body">
                    <h5 class="card-title">${item[i].data[0].title}</h5>
                    <p class="card-text">${item[i].data[0].description}</p>
                </div>
                </div>
            </div>
                `
            } else {
                col += `
                <div class="col-sm-4">
                <div class="card">
                <img class="card-img-top" src="${item[i].href}" alt="${item[i].data[0].title}">
                <figcaption style="font-weight: bold;">${item[i].data[0].date_created}</figcaption>
                <div class="card-body">
                    <h5 class="card-title">Taken On: ${item[i].data[0].title}</h5>
                    <p class="card-text">${item[i].data[0].description}</p>
                </div>
                </div>
            </div>
        `
            }
            }

            itemContainer.innerHTML = col;
        }



})