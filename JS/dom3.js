//Events

let btn = document.querySelector('.add-items-btn');

// btn.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('clicked');

// })
function addItem(e){
    e.preventDefault();
    console.log('clicked');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
}
btn.addEventListener('click',addItem);