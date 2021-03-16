(function () {

    // ЧАСТЬ 1
    let hotel = {
        name: 'Отель "Пляж"',
        roomRate: 245, // стоимость
        discount: 15, // скидка в %
        offerPrice: function () {
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };
    let hotelName = document.getElementById('hotelName');
    hotelName.textContent = hotel.name;

    let roomRate = document.getElementById('roomRate');
    roomRate.textContent = hotel.roomRate.toFixed(2) + '$';

    let specialRate = document.getElementById('specialRate');
    specialRate.textContent = hotel.offerPrice() + '$';

    // ЧАСТЬ 2
    let expiryMsg;
    let today;
    let elEnds;

    function offerExpires(today) {
        let weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        dayNames = ['Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу', 'Воскресенье'];
        monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Акция завершается в ';
        expiryMsg += day + '<br />(' + date + '' + month + '' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

}());