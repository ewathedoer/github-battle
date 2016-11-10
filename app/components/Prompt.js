var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var styles = require('../styles');

function Prompt (props) {
  return(
    <div className="row">
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>
          {props.header}
        </h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                onChange={props.onUpdateUser}
                value={props.username}
                type="text" />
            </div>
            <div className="form-group">
              <button 
                className="btn"
                type="submit"
                style={styles.startish}>
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;