let header = document.querySelector('.project-title');;
let button = document.querySelector('.add-items-btn');
let body = document.querySelector('body');

header.addEventListener('click',function(){
    console.log('header');
})
button.addEventListener('click',function(){
    console.log('button');
})
body.addEventListener('click',function(){
    console.log('body');
})