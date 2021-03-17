let score1 = 8;
let score2 = 8;
let pass1 = 6;
let pass2 = 6;

let passBoth = (score1 >= pass1) && (score2 >= pass2);

let msg = 'Оба этапа пройдены: ' + passBoth;

let el = document.getElementById('answer');
el.textContent = msg;