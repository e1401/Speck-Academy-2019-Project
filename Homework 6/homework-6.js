//halls

var hall01 = {
    id: 1,
    name: "hall-name",
    reservation: {
        isReserved: false,
        reservedFrom: null,
        reservedUntil: null,
    }
}


var hall02 = {
  id: 2,
  name: "hall-name",
  reservation: {
    isReserved: false,
      reservedFrom: null,
      reservedUntil: null,
  }
}


var hall03 = {
  id: 3,
  name: "hall-name",
  reservation: {
      isReserved: false,
      reservedFrom: null,
      reservedUntil: null,
  }
}


var hall04 = {
  id: 4,
  name: "hall-name",
  reservation: {
    isReserved: false,
    reservedFrom: null,
    reservedUntil: null,
  }
}


var hall05 = {
  id: 5,
  name: "hall-name",
  reservation: {
      isReserved: false,
      reservedFrom: null,
      reservedUntil: null,
  }
}


//the array
halls = [hall01, hall02, hall03, hall04, hall05];

//functions
//1. "add" function 
var hallName = name

var hall06 = {
  id: 6,
  name: hallName,
  reservation: {
      isReserved: false,
      reservedFrom: null,
      reservedUntil: null,
  }
}

function addHall (hallName) {
  halls.push(hall06);
}

//2. "remove" function
function removeId (halls, id) {
    for (var i = halls.length - 1; i > -1; i--) {
      if (halls[i].id === id) {
        halls.splice(i, 1);
      } ;
  }
  }

  //3. "reservation" function
  function reservation(id, reservedFrom, reservedUntil) {
    for (var i = 0; i < halls.length; i++) {
      if (halls[i].id === id) {
        halls[i].reservation.isReserved = true; 
  
        
      }
    }
  }