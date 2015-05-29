var React = require('react');
var StartPage = require('../StartPage/StartPage');
var SideBar = require('../SideBar/SideBar');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {logined: false};
  },
  onLogin: function (logined) {
    this.setState({logined: logined});
  },
  render: function () {
    if (this.state.logined) {
      return (
        React.createElement("div", {className: "app"}, 
          React.createElement(SideBar, null)
        )
      );
    } else {
      return (
        React.createElement("div", {className: "app"}, 
          React.createElement(StartPage, {onLogin: this.onLogin})
        )
      );
    }
  }
});