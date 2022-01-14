let btn = document.querySelector(".add-items-btn");
let input = document.querySelector(".add-items-input");
let newItem = document.createElement('li');
let span = document.createElement('span');
let aTag = document.createElement('a');
let iTag = document.createElement('i');
let ul = document.querySelector(".todo-list");

function ValidInput(){
    if(input.value.length > 0){
        return true;
    }
    else{
        return false;
    }
}
function CreateListElement(e){
    e.preventDefault();
    
    if(ValidInput()) {
        newItem.className = "todo-list-element";
        span.className = "todo-list-element-trash";
        // newItem.appendChild(document.createTextNode(input.value));
        span.innerText = input.value;
        aTag.className = "todo-list-element-trash";
        iTag.className = "fa fa-trash";
        aTag.appendChild(iTag);
        newItem.appendChild(span);
        newItem.appendChild(aTag);
        ul.appendChild(newItem);
        input.value = "";
    }
    else{
        input.setAttribute('placeholder','Input field cannot be empty');
    }
}

function AddItem(e){
    e.preventDefault();
    CreateListElement(e);
}
btn.addEventListener('click',AddItem);

// function Keypress(e){
//     console.log(e);
//     if (e.keyCode === 13){
//         CreateListElement();
//     }
// }
// input.addEventListener('keydown',Keypress)