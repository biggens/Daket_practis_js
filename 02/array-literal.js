let colors;
colors = ['white', 'black', 'green'];

let el = document.getElementById('colors');
el.textContent = colors[0];

let itemThree;
itemThree = colors[2];
console.log(itemThree);

let numColors;
numColors = colors.length;
console.log(numColors);

console.log(colors);
colors[2] = 'Розовый';
console.log(colors);

let elNewColors = document.getElementById('colors');
elNewColors.textContent= colors[2];