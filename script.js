const text = document.getElementById('textArea');
const color = document.getElementById('color');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const notes = document.querySelector('.notes');
const addLine = document.querySelector('#add-line');

function addNote() {
    if (text.value.trim() === "") {
        alert("Please enter some note");
        return;
    }

    let div = document.createElement('div');
    let para = document.createElement('p');
    let crossBtn = document.createElement('button');

    para.innerText = text.value;
    crossBtn.innerText = 'x';
    div.appendChild(para);
    div.append(crossBtn);
    div.style.backgroundColor = color.value;

    text.value = "";

    notes.append(div);
    addLine.style.display = 'none';
    
    crossBtn.addEventListener('click', () => {
        div.remove();
        if (notes.children.length === 0) {
            addLine.style.display = 'block';
        }
    });
}

add.addEventListener('click', addNote);
clear.addEventListener('click', () => {
    notes.innerHTML = "";
    addLine.style.display = 'block';
})