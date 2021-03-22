let startItem = document.getElementById('two');
let prevItem = startItem.previousSibling;
let nextItem = startItem.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';