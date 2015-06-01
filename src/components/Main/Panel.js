var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var $__1=     mui,AppBar=$__1.AppBar,Paper=$__1.Paper;

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement(Paper, {className: "left_panel", zDepth: 4}, 
        React.createElement("h1", null, "LeftNav")
      )
    );
  }
});