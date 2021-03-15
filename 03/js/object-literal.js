let hotel = {
    name: 'Тула',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();