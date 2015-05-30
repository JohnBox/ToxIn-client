var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');

module.exports = React.createClass({displayName: "exports",
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function () {
    return (
      React.createElement("div", {className: "side_bar"}, 
        React.createElement(mui.Paper, {zDepth: 5}, 
          React.createElement(UserHeader, null), 
          React.createElement("div", {className: "full"})
        ), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});

var UserHeader = React.createClass({displayName: "UserHeader",
  render: function () {
    return (
      React.createElement("div", {className: "user_header"}, 
        React.createElement("div", {className: "user_logo"}, 
          React.createElement("img", {src: "go.png", alt: ""})
        ), 
        React.createElement("div", {className: "user_name"}, 
          "John Box"
        )
      )
    );
  }
});
