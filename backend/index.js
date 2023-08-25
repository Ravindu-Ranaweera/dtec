const express = require("express");
var cors = require('cors')
const path = require("path");
var bodyParser = require('body-parser');
const Excel = require('exceljs');

const app = express();
const port = process.env.PORT || "8000";
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
const dbService = require('./service/readDB');

var result01

async function readLog() {
    const writeAPI = dbService.getDbServiceInstance();
    result01 = await writeAPI.getAllData();
    
}

readLog()
app.get('/course', (req, res) => {
    console.log(result01);
    res.send(result01);
});

app.listen(port, () => console.log(`http://localhost:${port}`))