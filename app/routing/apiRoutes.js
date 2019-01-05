const listOfFriends = require("../data/friends.js");
//console.log(listOfFriends);

//GET route to the url /api/friends for displaying JSON of possible friends
module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.send(listOfFriends);
    });

    //POST routes /api/friends for handling incoming survey results
    app.post('/api/friends', (req, res) => {
        const userInput = req.body;
        //console.log('userInput = ' + JSON.stringify(userInput));
        const userResponse = userInput.score;
        //console.log('userResponse = ' + userResponse);
        let matchName = '';
        let totalDiff = 10000;

        //search friends already on list
        for (let i = 0; i < listOfFriends.length; i++) {
            //console.log('friend = ' + JSON.stringify(listOfFriends[i]));

            //determine difference
            let diff = 0;
            for (let j = 0; j < userResponse.length; j++) {
                diff += Math.abs(listOfFriends[i].score[j] - userResponse[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = listOfFriends[i].name;
            }
        }
        //add new user
        listOfFriends.push(userInput);
        //send apt response
        res.json({ status: 'OK', matchName });
    });
};