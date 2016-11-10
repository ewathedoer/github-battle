var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt (props) {
  return(
    <div className="row">
      <div className="jumbotron col-xs-12 col-md-8 col-md-offset-2 text-center" style={transparentBg}>
        <h1>
          {props.header}
        </h1>
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control big-form"
                placeholder="Github Username"
                onChange={props.onUpdateUser}
                value={props.username}
                type="text" />
            </div>
            <div className="form-group">
              <button 
                className="btn cta"
                type="submit">
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