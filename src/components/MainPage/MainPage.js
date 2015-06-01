var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var $ = require('jquery');
var mui = require('material-ui');
var $__1=     mui,AppBar=$__1.AppBar,FlatButton=$__1.FlatButton;

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement("div", {className: "main_page"}, 
        React.createElement(mui.Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn"})
        )
        )
    );
  }
});