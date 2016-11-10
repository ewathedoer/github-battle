var React = require('react');
var styles = require('../styles');

function HomeContainerWrapper (props) {
  return (
    <div className="flex-parent no-pattern">
      <div className="flex-child">
        <div className="row">
          <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = HomeContainerWrapper;