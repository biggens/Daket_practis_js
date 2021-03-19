let scores = [24, 32, 17];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = '';
let i;

for (i = 0; i < arrayLength; i++) {
    roundNumber = (i + 1);

    msg += 'Round ' + roundNumber + ':';
    msg += scores[i] + '<br />';

}
let el = document.getElementById('answer');
el.innerHTML = msg;
