const text = document.getElementById('textArea');
const color = document.getElementById('color');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const notes = document.querySelector('.notes');
const addLine = document.querySelector('#add-line');
const inputSection = document.querySelector('.input-section');
const btns = document.querySelector('.btns');
const h1 = document.getElementsByTagName('h1')[0];

window.addEventListener('load', () => {
    inputSection.classList.add('visible');
    btns.classList.add('visible');
    h1.classList.add('visible');
    addLine.classList.add('visible');
})

function addNote() {
    if (text.value.trim() === "") {
        alert("Please enter some note");
        text.animate([
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'},
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'}
        ], {
            duration: 200,
            easing: 'ease-in-out',
            iterations: 4
        })
        return;
    }

    let div = document.createElement('div');
    let para = document.createElement('p');
    let crossBtn = document.createElement('button');

    para.innerText = text.value;
    crossBtn.innerText = 'x';
    div.appendChild(para);
    div.appendChild(crossBtn);
    div.classList.add('dynamic-div');
    div.style.backgroundColor = color.value;

    text.value = "";

    notes.append(div);
    addLine.style.display = 'none';
    
    crossBtn.addEventListener('click', () => {
        div.remove();
        if (notes.children.length === 0) {
            addLine.style.display = 'block';
            addLine.innerText = `You have removed all notes let's add new ones`;
        }
    });
}

add.addEventListener('click', addNote);
clear.addEventListener('click', () => {
    notes.innerHTML = "";
    addLine.style.display = 'block';
    addLine.innerText = `You have removed all notes let's add new ones`;
})