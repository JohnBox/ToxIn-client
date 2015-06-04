var React = require('react');
var $__0=    require('material-ui'),RaisedButton=$__0.RaisedButton;

module.exports = React.createClass({displayName: "exports",
  getInitialState:function() {
    return {state: 0};
  },
  r:function() {
    alert('');
  },
  render:function() {
    return (
      React.createElement("div", {className: "profile_button", onClick: this.r}, 
        React.createElement("div", null, this.props.name)
      )
    );
  }
});