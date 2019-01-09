const friends = require("../data/friends");

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.post('/api/friends', (req, res) => {
    let bestMatch = {
      name: '',
      photo: '',
      friendDifference: []
    };

    const userData = req.body;
    const userScores = userData.scores;

    let totalDiff;
    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      let totalDiff = 0;

      for (let j = 0; j < currentFriend.scores.length; j++) {
        let currentFriendScore = currentFriend.scores[j];
        let currentUserScore = userScores[j];

        totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDiff <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDiff;
      }
    }
    friends.push(userData);
    res.json(bestMatch);
  });
};