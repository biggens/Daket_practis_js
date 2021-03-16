let today = new Date();
// console.log(today);
let year = today.getFullYear();
// console.log(year);
let est = new Date('Apr 16, 1996 15:45:55');
// console.log(est);
let difference = today.getTime() - est.getTime();
difference = (difference/31556900000);

let elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + 'лет мы предоставляем вам услуги авиапрелетов';