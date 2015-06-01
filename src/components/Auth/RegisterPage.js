var React = require('react');
var Router = require('react-router');
var $__0=    Router,RouteHandler=$__0.RouteHandler;
var mui = require('material-ui');
var $__1=     mui,AppBar=$__1.AppBar,Paper=$__1.Paper;
var About = require('./About');
var RightButton = require('./RightButton');
var RegisterForm = require('./RegisterForm');

module.exports = React.createClass({displayName: "exports",
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState: function () {
    return {login: true};
  },
  render: function () {
    return (
      React.createElement("div", {className: "register_page"}, 
        React.createElement(Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn", iconElementRight: React.createElement(RightButton, {link: 'login', label: 'Війти'})}), 
          React.createElement(RegisterForm, null), 
          React.createElement(About, null)
        )
      )
    );
  }
});

