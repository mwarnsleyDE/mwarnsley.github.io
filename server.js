//Include variables for express
var express = require('express')
    port = 3000;

//Create Application
var app = express();

//Tell Express which folder to serve
app.use(express.static('public'));

//Tell Express which port to listen for and start the server on
app.listen(port, function(){
  console.log("Express Server is running on port: " + port);
});
