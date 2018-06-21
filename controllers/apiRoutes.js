var db = require("../models");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // app.get("/api/sorting-quiz", function(req, res) {
  //   db.User.findAll({
  //     attributes: ["name", "gender", "location", "team"],
  //     where: { team: "hufflepuff" }
  //   })
  //     .then(function(response) {
  //       res.json(response.length); //in the future remove length to get ALL of the data out of DB
  //     })
  //     .catch(function(err) {
  //       // print the error details
  //       console.log(err);
  //     });
  // });

  app.get("/api/home", function(req, res) {
    db.User.findAll({
      attributes: ["name", "gender", "location", "team", "createdAt"],
      limit: 5, 
      order: [['createdAt', 'DESC']]
    })
      .then(function(response) {
        res.json(response); //in the future remove length to get ALL of the data out of DB
      
      })
      .catch(function(err) {
        // print the error details
        console.log(err);
      });
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/sorting-quiz", function(req, res) {
    // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user"s numbers.
    // It will then choose the user with the least differences as the "best friend match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options

    // Here we take the result of the user"s survey POST and parse it.
    var user = req.body;

    db.User.create(user)
      .then(function(results) {
        res.json(results);
      })
      .catch(function(err) {
        // print the error details
        console.log(err);
      });
  });
};
