const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        //create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName) {

        let checkbox = document.createElement('input');
        checkbox.classList.add('item_checkbox');
        checkbox.type = "checkbox";

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

        let doneButton = document.createElement('button');
        doneButton.innerHTML = 'DONE';
        doneButton.classList.add('doneButton');

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.classList.add('deleteButton');

        container.appendChild(itemBox);

        itemBox.appendChild(checkbox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(doneButton);
        itemBox.appendChild(deleteButton);

        editButton.addEventListener('click', () => this.edit(input));
        doneButton.addEventListener('click', () => this.done(input, checkbox));
        deleteButton.addEventListener('click', () => this.delete(itemBox));

    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    done(input, checkbox) {
        input.style.textDecoration = "line-through";
        checkbox.checked = true;  
    }

    delete(itemBox) {
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
new item("genug trinken");
new item("Arzttermin ausmachen");
new item("Yoga");
new item("Meditation");
new item("Ralf");




