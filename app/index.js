var USER_DATA = {
  name: 'Marta Mrowecka',
  username: 'ant',
  image: 'http://theonewhodo.es/images/ant.png'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function() {
    return(
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var ProfilLink = React.createClass({
  render: function() {
    return(
      <div>
        <a href={'https://www.github.com/' + this.props.username}> 
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return(
      <div> 
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfilLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />, 
  document.getElementById('app')
);