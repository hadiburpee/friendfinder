
var path = require("path");

var friends = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friends);
        console.log(friends.length);
    });

    app.post("/api/friends", function(req, res){
        var newScores = req.body.scores;
        console.log(newScores);
        var intScores = [];
        var friendScore = 0;
        var score1 = 0;
        var score2 = 0;
        var score3 = 0;
        var score4 = 0;
        var score5 = 0;
        var comp1
        var comp2
        var comp3
        var comp4
        var comp5
        var friend1 = friends[0].scores;
        var friend2 = friends[1].scores;
        var friend3 = friends[2].scores;
        var friend4 = friends[3].scores;
        var friend5 = friends[4].scores;

        // console.log(friend1);

        for(i=0; i<10; i++){
            intScores[i] = parseInt(newScores[i]);
            friendScore+=intScores[i];
            score1 += friend1[i];
            score2 += friend2[i];
            score3 += friend3[i];
            score4 += friend4[i];
            score5 += friend5[i];
        }

        comp1 = Math.abs(friendScore - score1);
        comp2 = Math.abs(friendScore - score2);
        comp3 = Math.abs(friendScore - score3);
        comp4 = Math.abs(friendScore - score4);
        comp5 = Math.abs(friendScore - score5);

        var compareArray = [comp1, comp2, comp3, comp4, comp5];

        var match = Math.min(...compareArray);

        console.log(match);
        console.log(compareArray);

        if(match === comp1){
            console.log("you match with " + friends[0].name);
        }
        if(match === comp2){
            console.log("you match with " + friends[1].name);
        }
        if(match === comp3){
            console.log("you match with " + friends[2].name);
        }
        if(match === comp4){
            console.log("you match with " + friends[3].name);
        }
        if(match === comp5){
            console.log("you match with " + friends[4].name);
        }

        
        
        
        
        
        
        
        // console.log(friendScore);
        // console.log(score1);
        // console.log(score2);
        // console.log(score3);
        // console.log(score4);
        // console.log(score5);
        // console.log(intScores);
        // console.log(friends[3].scores);

        // var scoreFriend;
        

        

        // for(i=0; i<10; i++){
        //     scoreFriend += intScores[i];            
        //     score1 += friends[0].scores[i];
        //     score2 += friends[1].scores[i];
        //     score3 += friends[2].scores[i];
        //     score4 += friends[3].scores[i];
        //     score5 += friends[4].scores[i];
        //     console.log(score1);
        // }
        // // console.log(score1);



    });

}

