const express = require('express')
const app = express()
const port = 3000
var path = require("path");
var fs = require("fs");

app.get('/turnosProfessores', function (req, res) {
  console.log("TurnosProfs foram pedidos");
  res.header("Access-Control-Allow-Origin", "*");

  fs.readFile(__dirname + "/db/turnosProfessores.json", function (err, data) {
    let turnosJSON = JSON.parse(data);
    res.send(turnosJSON);
  });

});
app.get('/turnosAlunos', function (req, res) {
  console.log("TurnosAlunos foram pedidos");
  res.header("Access-Control-Allow-Origin", "*");

  fs.readFile(__dirname + "/db/turnosAlunos.json", function (err, data) {
    let turnosJSON = JSON.parse(data);
    res.send(turnosJSON);
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

