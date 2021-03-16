let today = new Date();


let year = today.getFullYear();

let el = document.getElementById('footer');
el.innerHTML = '<p>Собственность &copy;' + year + '</p>';

/*let elDate = document.getElementById('footer');
elDate.innerHTML = today + '<p>День месяца: ' + today.getDate() +
    '</p>' + '<p>День недели: ' + today.getDay() + '</p>' +
    '<p>Год: ' + today.getFullYear() + '</p>' +
    '<p>Месяц: ' + today.getMonth() + '</p>' +
    '<p>Часы: ' + today.getHours() + '</p>' +
    '<p>Минуты: ' + today.getMinutes() + '</p>' +
    '<p>Секунды: ' + today.getSeconds() + '</p>' +
    '<p>Милисекунды: ' + today.getMilliseconds() + '</p>' +
    '<p>Количество секунд с 1970 года: ' + today.getTime() + '</p>' +
    '<p>Смещение в минутах для данного региона: ' + today.getTimezoneOffset() + '</p>' +
    '<p>Удобная дата: ' + today.toDateString() + '</p>' +
    '<p>Удобное время: ' + today.toTimeString() + '</p>' +
    '<p>Строка указывающая дату: ' + today.toString() + '</p>';*/

