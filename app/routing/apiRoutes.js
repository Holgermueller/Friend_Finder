const listOfFriends = require("../data/friends.js");
console.log(listOfFriends);

//GET route to the url /api/friends for displaying JSON of possible friends
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(listOfFriends);
    })
}
//POST routes /api/friends for handling incoming survey results

//and compatability logic