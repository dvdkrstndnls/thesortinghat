// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================


var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;

// Tells node that we are creating an "express" server
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// BodyParser makes it easy for our server to interpret data sent to it.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// //maybe we don;t use handlebars SINCE ITS NOT REQUIRED and just serve regular html instead? (see author post activity)
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//DO THE 2 REQUIRE BELOW ALSO NEED VAR ASSOCIATED WITH THEM?
require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);

var routes = require("./controllers/usersController.js");

app.use(routes);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

//perhaps we delete the 3 below lines?
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

