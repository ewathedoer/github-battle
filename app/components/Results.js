var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Link = require('react-router').Link;
var Loading = require('./Loading'); 

function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to='/github-battle/playerOne'>
        <button className='btn btn-lg cta'>
          Start Over
        </button>
      </Link>
    </div>
  )
}

function Results (props) {
  if (props.isLoading === true) {
    return <Loading speed={100} text='One Moment'/>
  }
  
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!'</h1>
        <StartOver />
      </MainContainer>
    )
  }
  
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  
  return (
    <MainContainer>
      <h1 className="space-down uppercase">Results</h1>
      <div className='col-md-8 col-md-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} stars={props.stars[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} stars={props.stars[losingIndex]} info={props.playersInfo[losingIndex]} loser='true' />
        </UserDetailsWrapper>
      </div>
      <StartOver />  
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired
}

module.exports = Results;