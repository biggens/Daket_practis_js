let msg;
let level = 2;

switch(level) {
    case 1:
        msg = 'Удачи на первом этапе!';
        break;
    case 2:
        msg = 'Второй из трех - продолжаем!';
        break;
    case 3:
        msg = 'Финальный этап, соберитесь!';
        break;
    default:
        msg = 'Удачи!';
        break;
}

let el = document.getElementById('answer');
el.textContent = msg;