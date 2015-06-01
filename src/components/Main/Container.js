var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var $__1=      mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton;
var CoverButton = require('./CoverButton');


module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement(Paper, {className: "container", zDepth: 0}, 
        React.createElement(RaisedButton, {onClick: this.props.togglePanel}), 
        React.createElement("h1", null, "Container")
      )
    );
  }
});