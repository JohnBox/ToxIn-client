var React = require('react');
var $__0=    require('material-ui'),FloatingActionButton=$__0.FloatingActionButton;

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {state: true};
  },
  toggleState: function () {
    this.setState({state: !this.state.state});
    this.props.toggle();
  },
  render: function () {
    var label = this.state.state?'<':'>';
    return (
      React.createElement("div", {className: "toggle_button"}, 
        React.createElement(FloatingActionButton, {onClick: this.toggleState, label: label, mini: true})
      )
    );
  }
});