const listOfFriends = require("../data/friends.js");
//console.log(listOfFriends);

//GET route to the url /api/friends for displaying JSON of possible friends
module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(listOfFriends);
    });

    //POST routes /api/friends for handling incoming survey results
    app.post('/api/friends', (req, res) => {
        let newFriendsScores = req.body.scores;
        let arrayForScore = [];
        let friendCount = 0;
        let bestMatch = 0;

        //run through current list of friends
        for (let i = 0; i < listOfFriends.length; i++) {
            let differenceInScores = 0;
            //run through scores to compare friends
            for (let n = 0; n < newFriendsScores.length; n++) {
                differenceInScores += (Math.abs(parseInt(listOfFriends[i].scores[n] - parseInt(newFriendsScores[n]))));
            }

            //push results to array
            arrayForScore.push(differenceInScores);
        }

        //find best match
        for (let i = 0; i < arrayForScore.length; i++) {
            if (arrayForScore[i] <= arrayForScore[bestMatch]) {
                bestMatch = i;
            }
        }
        //return best match
        let bestFriendFromArray = listOfFriends[bestMatch];
        res.json(bestFriendFromArray);

        //push new submisstion into list array
        listOfFriends.push(req.body);
    });
};