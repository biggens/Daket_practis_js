let firstItem = document.getElementById('one');
firstItem.className = 'complete';

let fourthItem = document.getElementsByTagName('li').item(3);
// item - это метод Nodelist в котором можно указать номер или воспользоваться записью массива [3];
fourthItem.setAttribute('class', 'cool');