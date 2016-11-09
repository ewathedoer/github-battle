var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return(
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Compare Developers</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg' style={styles.startish}>
            Get Started
          </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;