var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (user) {
  var classVal = '';
  if (user.loser) {
    classVal = 'loser';
  }
  if (user.info.blog && user.info.blog.length > 0 && !user.info.blog.match(/^[a-zA-Z]+:\/\//)) {
    user.info.blog = 'http://' + user.info.blog;
  }
  return (
    <div className={classVal}>
      {user.score >= 0 && <li className="list-group-item attraction"><h3>Score: {user.score}</h3></li>}
      <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive center"/></li>
      {user.info.name && <li className="list-group-item">Name: {user.info.name}</li>}
      <li className="list-group-item">Username: {user.info.login}</li>
      {user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
      {user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
      <li className="list-group-item">Followers: {user.info.followers}</li>
      <li className="list-group-item">Following: {user.info.following}</li>
      <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
      {user.stars >= 0 && <li className="list-group-item">Stars: {user.stars}</li>}
      {user.info.blog && <li className="list-group-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  loser: PropTypes.bool,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

module.exports = UserDetails;