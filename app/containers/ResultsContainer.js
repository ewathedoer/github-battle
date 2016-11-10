var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: [],
      stars: []
    }
  },
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scoresInfo) {
        this.setState({
          scores: scoresInfo[0],
          stars: scoresInfo[1],
          isLoading: false
        })
    }.bind(this))
  },
  render: function() {
    return (
      <Results 
        isLoading={this.state.isLoading} 
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
        stars={this.state.stars} />
    )
  }
});

module.exports = ResultsContainer;