var React = require('react');
var $__0=    require('material-ui'),RaisedButton=$__0.RaisedButton;

module.exports = React.createClass({displayName: "exports",
  getInitialState:function() {
    return {state: 0};
  },
  changeState:function() {
    this.setState({state: (this.state.state+1)%3});
  },
  render:function() {
    var style='';
    switch (this.state.state) {
      case 0:
        style = 'solid 2px green';
        break;
      case 1:
        style = 'solid 2px yellow';
        break;
      case 2:
        style = 'solid 2px #f44';
        break;
    }
    return (
      React.createElement("div", {className: "icon_button"}, 
        React.createElement("img", {src: "go.png", style: {border: style}, onClick: this.changeState})
      )
    );
  }
});