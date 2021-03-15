let hotel = {
    name: 'Пляж',
    rooms: 120,
    booked: 77,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

hotel.doors = 45;
hotel.doors = 'много дверей';
delete hotel.doors;

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

console.log(hotel);