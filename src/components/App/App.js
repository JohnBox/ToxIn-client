var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var StartPage = require('../StartPage/StartPage');
var SideBar = require('../SideBar/SideBar');
var MessageBar = require('../MessageBar/MessageBar');


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
          React.createElement(SideBar, null), 
          React.createElement(MessageBar, null), 
          React.createElement(RouteHandler, null)
        )
      );
    } else {
      return (
        React.createElement("div", {className: "app"}, 
          React.createElement(StartPage, {onLogin: this.onLogin}), 
          React.createElement(RouteHandler, null)
        )
      );
    }
  }
});