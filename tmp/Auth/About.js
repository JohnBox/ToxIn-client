var React = require('react');
var GitHubButton = require('../Button/GitHubButton');

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement("div", {className: "about"}, 
        React.createElement(GitHubButton, {href: "https://github.com/JohnBox/ToxIn-client"}), 
        React.createElement(GitHubButton, {href: "https://github.com/JohnBox/ToxIn-server"})
      )
    );
  }
});

