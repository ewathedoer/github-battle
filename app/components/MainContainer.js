var React = require('react');
var styles = require('../styles');

function MainContainer (props) {
  return (
    <div className="row">
      <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        {props.children}
      </div>
    </div>
  )
}

module.exports = MainContainer;