var React = require('react');

var Img = React.createClass({
  render: function() {
    return (
      <div className="img-intro">
        <img src="/github-battle/img/github-battle.png" alt="github-battle" className="img-responsive intro"/>
        <a href="http://www.freepik.com/free-vector/coloured-knights-collection_956817.htm" className="display-block">Knight by Freepik</a>
        <a href="http://theonewhodo.es" className="display-block">Designed and coded by the doer</a>
        <a href="https://reacttraining.com/online" className="display-block">thanks to React Training</a>
      </div>
    )
  }
});

module.exports= Img;