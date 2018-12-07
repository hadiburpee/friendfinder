
var path = require("path");

var friends = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friends);
        console.log(friends.length);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body.scores);


    });

}

