let newEl = document.createElement('li');

let newText = document.createTextNode('quinoa');

newEl.appendChild(newText);

let position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);