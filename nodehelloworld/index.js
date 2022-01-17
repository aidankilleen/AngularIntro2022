console.log("Node Hello World");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response) {
    response.send("<h1>Hello World</h1>");
});

app.listen(port, function () {
    console.log("Sever listening on port " + 3000);
});



