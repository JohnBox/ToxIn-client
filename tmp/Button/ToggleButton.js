var React = require('react');
var $__0=       require('material-ui'),FloatingActionButton=$__0.FloatingActionButton,IconButton=$__0.IconButton,SvgIcon=$__0.SvgIcon,IconButton=$__0.IconButton;

module.exports = React.createClass({displayName: "exports",
  getInitialState:function() {
    return {state: true};
  },
  toggleState:function() {
    this.setState({state: !this.state.state});
    this.props.toggle();
  },
  getStyles:function() {
    return { width: '36px', height: '36px' };
  },
  render: function () {

    var style = this.getStyles(),
        icon;
    if (this.state.state) {
      icon = (React.createElement("path", {d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}));
    } else {
      icon = (React.createElement("path", {d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}));
    }
    return (
      React.createElement("div", {className: "toggle_button"}, 
        React.createElement(IconButton, {onClick: this.toggleState}, 
          React.createElement(SvgIcon, {style: style}, 
            React.createElement("path", {d: "M0 0h24v24H0z", fill: "none"}), 
            icon
          )
        )
      )
    );
  }
});