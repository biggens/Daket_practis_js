let list = document.getElementsByTagName('ul')[0];

let newItemLast = document.createElement('li');
let newTextLast = document.createTextNode('деревенская сметана');

newItemLast.appendChild(newTextLast);

list.appendChild(newItemLast);

let newItemFirst = document.createElement('li');
let newTextFirst = document.createTextNode('Белокачанная капуста');

newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);



let listItems = document.querySelectorAll('li');
for(let i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

let heading = document.querySelector('h2');
console.log(heading);
let headingText = heading.firstChild.nodeValue;
console.log(headingText);
let totalItems = listItems.length;
console.log(totalItems);

let newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;