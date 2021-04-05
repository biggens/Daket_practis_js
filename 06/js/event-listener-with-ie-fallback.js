let elUsername = document.getElementById('username');
let elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.textContent = 'Имя пользователя должно содержать не менее ' + minLength + 'символов';
    } else {
        elMsg.innerHTML = '';
    }
}

if(elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(){
        checkUsername(5);
    }, false);
}else {
    elUsername.attachEvent('onblur', function() {
        checkUsername(5);
    });
}