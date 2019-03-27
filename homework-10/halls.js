var halls = []

halls[0] = {
    id: 0,
    name: "Velika sportska dvorana",
    reservation: {
        isReserved: true,
        reservedFrom: DateTime.fromISO("2019-03-15"),
        reservedUntil: DateTime.fromISO("2019-03-16"),
    }
}

halls[1] = {
    id: 1,
    name: "Dvorana Hrvatskog doma",
    reservation: {
        isReserved: true,
        reservedFrom: DateTime.fromISO("2019-03-17"),
        reservedUntil: DateTime.fromISO("2019-03-18"),
    }
}

halls[2] = {
    id: 2,
    name: "Dvorana Gradske knjižnice",
    reservation: {
        isReserved: true,
        reservedFrom: null,
        reservedUntil: null,
    }
}

halls[3] = {
    id: 3,
    name: "Dvorana TIC",
    reservation: {
        isReserved: false,
        reservedFrom: null,
        reservedUntil: null,
    }
}

//Hall with the same name below 

halls[4] = {
    id: 4,
    name: "Dvorana TIC",
    reservation: {
        isReserved: false,
        reservedFrom: null,
        reservedUntil: null,
    }
}

module.exports = halls;