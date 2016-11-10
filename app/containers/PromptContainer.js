var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return{
      username: ''
    }
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    var username = this.state.username;
    if (username.length == 0) {
      return false;
    }
    this.setState({
      username: ''
    });
    
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
    
  },
  render: function(){
    var errorValue = false;
    if (typeof this.props.location.state !== 'undefined') {
      errorValue = this.props.location.state.wrongPlayer;
    } 
    return(
      <Prompt 
        onSubmitUser = {this.handleSubmitUser} 
        onUpdateUser = {this.handleUpdateUser} 
        header = {this.props.route.header}
        username = {this.state.username}
        error = {errorValue} />
    )
  }
});

module.exports = PromptContainer;