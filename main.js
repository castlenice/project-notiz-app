const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        //create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.classList.add('editButton');

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.classList.add('deleteButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(deleteButton);

        editButton.addEventListener('click', () => this.edit(input));
        deleteButton.addEventListener('click', () => this.delete(itemBox));
        //item-box

    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    delete(itemBox) {
        //input.style.textDecoration = "line-through";
        container.removeChild(itemBox);
    }

    //input.style.textDecoration = "line-through"; neue methode erstellen!
   
}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

new item("Sport");




