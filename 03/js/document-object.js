let msg = '<p><b>заголовок страницы:</b>' + document.title + '<br/>';
msg += '<b>адрес страницы:</b>' + document.URL + '<br/>';
msg += '<b>дата изменения:</b>' + document.lastModified + '</p>';

let el = document.getElementById('footer');
el.innerHTML = msg;