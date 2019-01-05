const listOfFriends = require("../data/friends");

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(listOfFriends);
  });

  app.post('/api/friends', (req, res) => {
    let bestMatch = {
      name: '',
      photo: '',
      friendDifference: Infinity
    };

    const userInput = req.body;
    const userResponse = userInput.score;

    let totalDiff;

    //search friends already on list
    for (let i = 0; i < listOfFriends.length; i++) {
      let currentFriend = listOfFriends[i];
      let totalDiff = 0;

      for (let j = 0; j < currentFriend.score.length; j++) {
        let currentFriendScore = currentFriend.score[j];
        let currentUserScore = userResponse[j];

        totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDiff <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDiff;
      }
    }
    //add new user
    listOfFriends.push(userInput);
    //send apt response
    res.json(bestMatch);
    console.log(bestMatch);
  });
};