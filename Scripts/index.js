let itemsShelf = [[], [], []];
let items = document.getElementsByClassName('items');
let shelf = document.getElementsByClassName('shelf');
let itemSeleccionado;

for(let item of items) {
    item.onclick = function() {
        itemSeleccionado = item.innerHTML;
    }
}

for(let i = 0; i < shelf.length; i++) {
    shelf[i].onclick = function() {
        itemsShelf[i].push(itemSeleccionado);
        actualizarShelf();
    }
}

const actualizarShelf = function() {
    for(let i = 0; i < shelf.length; i++) {
        shelf[i].innerHTML = '';
        for(let j = 0; j < itemsShelf[i].length; j++) {
            let nuevoItem = document.createElement('div');
            nuevoItem.innerHTML = itemsShelf[i][j];
            shelf[i].appendChild(nuevoItem);
            }
        }
    }
