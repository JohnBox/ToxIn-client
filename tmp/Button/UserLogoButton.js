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
    return {border: 0};
  },
  getStyles:function() {
    var imgBorder = ['green', 'yellow', '#F44'];
    return {
      border: 'solid 2px '+imgBorder[this.state.border],
      backgroundColor: this.getTheme().canvasColor
    };
  },
  changeState:function() {
    this.setState({border: (this.state.border+1)%3});
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