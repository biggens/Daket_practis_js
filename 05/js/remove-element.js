let removeEl = document.getElementsByTagName('li')[3];

let containerEl = removeEl.parentNode;
console.log(containerEl);

containerEl.removeChild(removeEl);