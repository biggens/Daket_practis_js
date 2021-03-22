let firstItem = document.getElementById('one');

if(firstItem.hasAttribute('class')) {
    let attr = firstItem.getAttribute('class');

    let el = document.getElementById('scriptResults');
    el.innerHTML = '<p>Первому элементу присвоен класс:' + attr + '</p>';
}