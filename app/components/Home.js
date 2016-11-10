var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');
var Img = require('./Img');

var Home = React.createClass({
  render: function() {
    return(
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Compare Developers</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg cta'>
            Get Started
          </button>
        </Link>
        <Img />
      </MainContainer>
    )
  }
});

module.exports = Home;