let header = document.querySelector('.project-title');
let container = document.querySelector('.container');
let input = document.querySelector('input');
let button = document.querySelector('.add-items-btn');

function EventOccuring(e){
    console.log("Event Occuring",e.type);
    if (e.type === 'mousemove') {
        console.log('X: '+e.offsetX+'& Y:'+e.offsetY)
    }
}/*
//Mouse Events

//mouseenter only triggers when the mouse enters the element on which it is set.
header.addEventListener('mouseenter',EventOccuring);


//mouseleave only triggers when the mouse leaves the element on which it is set.
header.addEventListener('mouseleave',EventOccuring);

//mouseover triggers when the mouse enters the element or any of its children.
container.addEventListener('mouseover',EventOccuring);

//mouseout triggers when the mouse leaves the element or any of its children.
container.addEventListener('mouseout',EventOccuring);

//When we release the pointer from the selected element
header.addEventListener('mouseup',EventOccuring);

//When we press the pointer from the selected element
header.addEventListener('mousedown',EventOccuring);

//When we move the mouse on the element
header.addEventListener('mousemove',EventOccuring);
*/
/*
//KeyBoard Events
input.addEventListener('keydown',EventOccuring);
input.addEventListener('keyup',EventOccuring);
input.addEventListener('keypress',EventOccuring);*/

//Other Events
input.addEventListener('focus',EventOccuring);
input.addEventListener('blur',EventOccuring);
input.addEventListener('cut',EventOccuring);
input.addEventListener('paste',EventOccuring);
input.addEventListener('copy',EventOccuring);