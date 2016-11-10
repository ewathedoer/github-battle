var axios = require('axios');

var id = "68f7121b3463423d9f90";
var sec = "7501c822adaf89df5e134e85a78d8505e43a054e";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https:/api.github.com/users/' + username + param)
}

function getRepos (username) {
  return axios.get('https:/api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
  })
}

function calculateScores (players) {
  return [
    [
      players[0].followers * 3 + players[0].totalStars,
      players[1].followers * 3 + players[1].totalStars,
    ],
    [
      players[0].totalStars,
      players[1].totalStars
    ]
  ]
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.log('Error in getPlayersInfo', err)  
    })
  },
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;