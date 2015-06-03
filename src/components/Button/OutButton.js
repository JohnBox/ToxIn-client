var React = require('react');
var $__0=    require('react-router'),Link=$__0.Link;
var $__1=    require('material-ui'),RaisedButton=$__1.RaisedButton;

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement("div", {className: "appbar_button"}, 
      React.createElement(Link, {to: "login"}, 
        React.createElement("i", {className: "material-icons x20"}, "arrow_back")
      )
      )
    );
  }
});