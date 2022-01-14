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
document.querySelector('li').classList.add('unga');
document.querySelector('li').classList.remove('unga');
//toggle switches add to remove and vice versa
document.querySelector('li').classList.toggle('unga');
document.querySelector('li').classList.toggle('unga');
let p = document.querySelector('p');
p.innerHTML = '<span><em>Rumble</em></span>';
let a = document.querySelector('a');
a.innerText = 'Unga Bungas'
console.log(p.innerHTML);
let id = document.querySelector('h1').id;

console.log(id);
// document.querySelector('li:nth-child(2)').classList.add('myStyle');
// document.querySelector('li:last-child').classList.add('myStyle');
document.querySelector('li:nth-child(odd)').classList.add('myStyle');

let element = document.getElementsByClassName('todo-list-element');
console.log("Todo-list-element",element);

let elementArr = Array.from(element);
console.log(elementArr);

elementArr.forEach(element => {
  console.log(element);
});

let xd = document.querySelectorAll('li');.

xd.forEach(element => {
  console.log(element);  
});