let firstItem = document.getElementById('one');

let itemContent = firstItem.innerHTML;
console.log(itemContent);

firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
console.log(firstItem);