var express = require("express");
var routes = express.Router();


routes.get("/", function (req, res) { // localhost:3000/user
    // console.log(req.session);
    
    var pagedata = { title: "User Account", pagename: "user/index" };
    res.render("layout", pagedata);
});

module.exports = routes;