var express = require("express");

var router = express.Router();
var burger = require("../models/users.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/users");
});

router.get("/users", function(req, res) {
  // express callback response by calling users.selectAllBurger
  users.all(function(usersData) {
    // wrapper for orm.js that using MySQL query callback will return users_data, render to index with handlebar (MUST BE SOMETHING ELSE NOT USING HANDLEBARS)
    res.render("home", { users_data: usersData });
  });
});

// post route -> back to index
router.post("/users/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  users.create(req.body.users_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/users/:id", function(req, res) {
  users.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
