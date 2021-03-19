let pass = 50;
let score = 75;
let msg;

if(score >= pass) {
    msg = 'Поздравления, пройдено!';
}else {
    msg = 'повторить попытку!';
}

let el = document.getElementById('answer');
el.textContent = msg;