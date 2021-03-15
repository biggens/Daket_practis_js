function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

let quayHotel = new Hotel('Тула', 40, 25);
let parkHotel = new Hotel('Пляж', 120, 77);

let details1 = quayHotel.name + ', свободно номеров: ';
details1 += quayHotel.checkAvailability();
let elHotel1= document.getElementById('hotel1');
elHotel1.textContent = details1;

let details2 = parkHotel.name + ', свободно номеров: ';
details2 += parkHotel.checkAvailability();
let elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;