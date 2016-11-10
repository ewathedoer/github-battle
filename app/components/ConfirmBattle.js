var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props) {
  return props.isLoading === true
  ? <Loading speed={800} text='Waiting' />
  : <MainContainer>
      <h1 style={styles.spaceDown}>Confirm Players</h1>
      <div className='col-xs-12 col-md-8 col-md-offset-2'>
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={(props.playersInfo[0])} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={(props.playersInfo[1])} />
        </UserDetailsWrapper>
      </div>
          
      <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          <button type='button' className='btn btn-lg cta' onClick={props.onInitiateBattle}>
            Start Battle
          </button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg reselect-btn mobile-space-down uppercase'>
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;