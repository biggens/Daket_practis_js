let greeting = 'Привет, ';
let name = 'Катерина';
let message = '! Пожалуйста, проверьте заказ:';
let welcome = greeting + name + message;

let sign = 'Всемирная сеть';
let cost = sign.length;
let subTotal = cost * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

let el = document.getElementById('greeting');
el.textContent = welcome;

let elSign = document.getElementById('userSign');
elSign.textContent = sign;

let elTiles = document.getElementById('tiles');
elTiles.textContent = cost;

let elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + 'Руб.';

let elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + 'Руб.';

let elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + 'Руб.';