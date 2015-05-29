var React = require('react');
var StartPage = require('../StartPage/StartPage');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {logined: false};
  },
  onLogin: function (logined) {
    this.setState({logined: logined});
  },
  render: function () {
    return (
      React.createElement("div", {className: "app"}, 
        React.createElement(StartPage, {onLogin: this.onLogin})
      )
    );
  }
});