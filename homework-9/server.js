// array of halls

var halls = []

halls[0] = {
    id: 0,
    name: "Velika sportska dvorana",
    reservation: {
        isReserved: true,
        reservedFrom: null,
        reservedUntil: null,
    }
}

halls[1] = {
    id: 1,
    name: "Dvorana Hrvatskog doma",
    reservation: {
        isReserved: true,
        reservedFrom: null,
        reservedUntil: null,
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

halls[4] = {
    id: 4,
    name: "Konferencijske dvorane RCTP",
    reservation: {
        isReserved: false,
        reservedFrom: null,
        reservedUntil: null,
    }
}

// array of onlly names

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(halls, "name");

//create string with hall names separated by a comma

var hallsToString = result.join(", ");

// server

var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end(hallsToString);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');