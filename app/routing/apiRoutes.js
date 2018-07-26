const listOfFriends = require("../data/friends.js");
//console.log(listOfFriends);

//GET route to the url /api/friends for displaying JSON of possible friends
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.send(listOfFriends);
    });

    //POST routes /api/friends for handling incoming survey results
    app.post('/api/friends', (req, res) => {
        const userInput = req.body;
        //console.log('userInput = ' + JSON.stringify(userInput));
        const userResponse = userInput.score;
        console.log('userResponse = ' + userResponse);
    });
};