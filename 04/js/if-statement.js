let score = 75;
let msg;

if(score >= 50) {
    msg = 'Поздравляем!';
    msg += 'Переходите к следующему этапу.';
}
let el = document.getElementById('answer');
el.textContent = msg;