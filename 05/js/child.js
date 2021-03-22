let startItem = document.getElementsByTagName('ul')[0];
let firstItem = startItem.firstChild;
let lastItem = startItem.lastChild;

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');