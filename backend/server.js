const express = require('express')
const app = express()
const port = 3000
var path = require ("path");
var fs = require("fs");
app.get('/', (req, res) => {
  res.send("Nada nesse endpoint. Tente /turnos!")
})

app.get('/turnos', function (req, res) {
    console.log("Turnos foram pedidos");
    res.header("Access-Control-Allow-Origin", "*");

    fs.readFile(__dirname + "/db/turnosProfessores.json", function (err, data) {
      let turnosJSON = JSON.parse(data);
      console.log(turnosJSON)
       res.send(turnosJSON);
    });
    
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})