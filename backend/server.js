const express = require('express')
const app = express()
const port = 3000
var path = require ("path");
var fs = require("fs");
app.get('/', (req, res) => {
  // let indexPath = path.resolve('../src/main.jsx');
  let indexPath = path.join(__dirname, "../index.html");
  console.log(indexPath);
  res.sendFile(indexPath);
})

app.get('/turnos', function (req, res) {
    console.log("Turnos requested");
    res.header("Access-Control-Allow-Origin", "*");
    let filePath = __dirname + '/db/turnosProfessores.json';
    // let turnosJSON = JSON.parse(filePath);
    // console.log(turnosJSON);

    fs.readFile(__dirname + "/db/turnosProfessores.json", function (err, data) {
      console.log(" data");
      console.log(data)  
      let turnosJSON = JSON.parse(data);
        
      console.log("Parsed")
        console.log(turnosJSON)
       res.send(turnosJSON);
    });
    
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})