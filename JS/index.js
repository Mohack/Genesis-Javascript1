let tagName = document.getElementsByTagName('li');
let className = document.getElementsByClassName('container');
let idName = document.getElementById('title');
let querySelector = document.querySelector('h1');
let querySelectorAll = document.querySelectorAll('li');

console.log(tagName);
console.log(className);
console.log(idName);
console.log(querySelector);
console.log(querySelectorAll);
console.log(document.querySelectorAll('.todo-list-element'));
console.log(document.querySelectorAll('#add'));

console.log(document.querySelector('h1').getAttribute('class'));
document.querySelector('h1').setAttribute('class','todo-list-element');
document.querySelector('h1').style.backgroundColor = "red";
document.querySelector('h1').className='myStyle';
document.querySelector('li').classList;
document.querySelector('li').classList.add('unga bunga');
document.querySelector('li').classList.remove('unga');