var React = require('react');
var mui = require('material-ui');
var $__0=    mui,RaisedButton=$__0.RaisedButton;
var StylePropable = mui.Mixins.StylePropable;


module.exports = React.createClass({displayName: "exports",
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme:function() {
    return this.context.muiTheme.palette;
  },
  getInitialState:function() {
    return {on: true};
  },
  getStyles:function() {
    var imgBorder = ['#F33','green'];
    return {
      border: 'solid 2px '+imgBorder[this.state.on+0],
      backgroundColor: this.getTheme().canvasColor
    };
  },
  changeState:function() {
    this.setState({on: !this.state.on});
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement("div", {className: "logo_button"}, 
        React.createElement("img", {src: "static/go.png", style: style, onClick: this.changeState})
      )
    );
  }
});