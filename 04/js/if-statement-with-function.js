let score = 75;
let msg;

function congratulate() {
    msg = 'Поздравляем!';
}

if(score >= 50) {
    congratulate();
    msg += 'Переходите к следующему этапу.';
}

let el = document.getElementById('answer');
el.innerHTML = msg;