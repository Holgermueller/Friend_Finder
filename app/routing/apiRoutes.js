const friends = require("../data/friends");

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.post('/api/friends', (req, res) => {
    let bestMatch = {
      name: '',
      photo: '',
      scores: []
    };

    const userInput = req.body;
    const userResponse = userInput.scores;

    let totalDiff;

    //search friends already on list
    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      let totalDiff = 0;

      for (let j = 0; j < currentFriend.scores.length; j++) {
        let currentFriendScore = currentFriend.scores[j];
        let currentUserScore = userResponse[j];

        totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDiff <= bestMatch.scores) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.scores = totalDiff;
      }
    }
    friends.push(userInput);
    res.json(bestMatch);
    console.log(bestMatch);
  });
};