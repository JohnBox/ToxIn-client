var React = require('react');
var $__0=    require('react-router'),Link=$__0.Link;
var $__1=    require('material-ui'),RaisedButton=$__1.RaisedButton;

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement("div", {className: "appbar_button"}, 
        React.createElement(RaisedButton, {label: this.props.label, onClick: this.props.onClick})
      )
    );
  }
});