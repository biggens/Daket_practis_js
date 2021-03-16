let randomNum = Math.floor((Math.random() * 10) + 1);

let el = document.getElementById('info');
el.innerHTML = '<h2>случайное число</h2><p>' + randomNum + '</p>';