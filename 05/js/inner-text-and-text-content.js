let firstItem = document.getElementById('one');
let showTextContent = firstItem.textContent;
console.log(showTextContent);

let showInnerText = firstItem.innerText;
console.log(showInnerText);

let msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';

let el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'пшеничные сухари';
