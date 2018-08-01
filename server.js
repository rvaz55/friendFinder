//Here we start by downloading the 
//npm modules listed below
var fs = require("fs");
var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");



//Creating the instance of express and 
//storing it in the app variable then naming the port
var app = express()
var PORT = 3002

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Then we make sure that the server we created 
//is LISTENING 
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

//Here we create two routes: 'survey' & 'home'

app.get("/home", function(req, res) {
    console.log("this is the home route")
    res.sendFile(path.join(__dirname, "public/home.html"));
  });

//The survey button has an event listener that will trigger
//a JQUERY AJAX request that then triggers the 'get' request coded below.
//The button is therefore allows the client to submit a 'get' request
//to our server via the push of a button  
app.get("/survey", function(req,res){
    console.log("this is the survey route")
    res.sendFile(path.join(__dirname, "public/survey.html"));

});
    



//Here goes the code to manipulate data from the friendsJS

//this required modules gives access to the
//friendArr object in the friends.js file

var friendJSdata = require("./data/friends")

app.post("/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (friendJSdata) {
     
        console.log("this is the req body")
      console.log(req.body)
      console.log("--------------------------")
      //console.log("this is the res OBJECT")
      console.log( req.params);
   // res.json(true);

  //  console.log(friendJSdata)
    //    friendJSdata.push(req.body)
      //  console.log(friendJSdata)
    }
    else {
      console.log('nothing happened')
    }
  });
    
   