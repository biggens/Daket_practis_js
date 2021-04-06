function checkLength(e, minLength) {
    let el, elMsg;
    if (!e) {
        e = window.event;
    }
    el = e.target || e.srcElement;
    console.log(el);
    elMsg = el.nextSibling;
    console.log(elMsg);

    if (el.value.length < minLength) {
        elMsg.innerHTML = 'Имя пользователя должно содержать не менее';
    } else {
        elMsg.innerHTML = '';
    }
}

let elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function (e) {
        checkLength(e, 5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function (e) {
        checkLength(e, 5);
    });
}