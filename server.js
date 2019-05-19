// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tableArr = [
    {   
        
        name: "john", 
        phone: "555-5555",
        email: "john@aol.com",
        id: "johnny"
    }
];

var waitingArr = [
    {   
        
        name: "john", 
        phone: "555-5555",
        email: "john@aol.com",
        id: "johnny"
    }
]

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tableArr);
  });

app.get("/api/tables", function(req, res) {
    return res.json(waitingArr);
  });


  app.post("/api/tables", function(req, res, err) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    if (err) {
        console.log(err);
    }
    var newTable = req.body;
    
    tableArr.push(newTable);
   
    
    // if (tableArr.length < 5){
    //     tableArr.push(newTable);
    // } else {
    //     waitingArr.push(newTable);
    // }
    
    res.json(newTable);
    console.log(newTable);
  
    
  
    
  });
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });