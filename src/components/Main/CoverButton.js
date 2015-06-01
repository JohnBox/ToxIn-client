var React = require('react');
var $__0=    require('material-ui'),RaisedButton=$__0.RaisedButton;

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {isOpen: true};
  },
  toggleState: function () {
    this.setState({isOpen: !this.state.isOpen});
    this.props.togglePanel();
  },
  render: function () {
    var label = this.state.isOpen?'<':'>';
    return (
      React.createElement("div", {className: "appbar_button"}, 
        React.createElement(RaisedButton, {onClick: this.toggleState, label: label})
      )
    );
  }
});