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

// allow access control origin and headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    next();
});

//set routes 
app.use("/", require('./src/components'));


app.listen(port, "0.0.0.0", ()=>{
    console.log("server is listing to the port", port)
} )

