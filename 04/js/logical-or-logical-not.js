let score1 = 8;
let score2 = 8;
let pass1 = 6;
let pass2 = 6;

let minPass = ((score1 >= pass1) || (score2 >= pass2));

let msg = 'Требуется ли пересдача:' + !minPass;

let el = document.getElementById('answer');
el.textContent = msg;