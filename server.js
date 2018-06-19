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


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//DO THE 2 REQUIRE BELOW ALSO NEED VAR ASSOCIATED WITH THEM?
require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync(
  // { force: true } use this to run locally but comment out to deploy (aka keep this commented unless you want to deleete all the DB data)
).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

