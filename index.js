const express = require("express");
const bodyParser = require("body-parser");


//Initiate express Server
const app = express();

const port = process.env.PORT || 5100;


// Connect To Database
require("./src/utils/mongoose/index");



// parse requests of content-type - application/json
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

//set routes 
app.use("/", require('./src/components'));


app.listen(port, "0.0.0.0", ()=>{
    console.log("server is listing to the port", port)
} )

