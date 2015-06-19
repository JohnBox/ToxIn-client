var React = require('react');
var GitHubButton = require('../Button/GitHubButton');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="about">
        <GitHubButton href='https://github.com/JohnBox/ToxIn-client'/>
        <GitHubButton href='https://github.com/JohnBox/ToxIn-server'/>
      </div>
    );
  }
});

