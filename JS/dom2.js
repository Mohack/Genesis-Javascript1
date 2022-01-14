let newli = document.createElement('li');
newli.classList.add('todo-list-element');
newli.setAttribute('id','elementId');

let span = document.createElement('span');
span.className='todo-list-element-title';
span.innerText='Get to Gym';
// newli.appendChild(span);

let a = document.createElement('a')
a.classList.add('todo-list-element-trash');

let i = document.createElement('i');
i.className='fa fa-trash';

a.appendChild(i);

newli.appendChild(span);
newli.appendChild(a);

ul = document.querySelector('ul');
ul.appendChild(newli);



