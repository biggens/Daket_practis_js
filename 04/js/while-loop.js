let i = 1;
let msg = '';

while(i < 10) {
    msg += i + 'x 5 = ' + (i * 5) + '<br />';
    i++;
}

let el = document.getElementById('answer');
el.innerHTML = msg;