var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var mui = require('material-ui');
var $__1=        mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,SvgIcon=$__1.SvgIcon,TextField=$__1.TextField;
var StylePropable = mui.Mixins.StylePropable;


var CloseButton = React.createClass({displayName: "CloseButton",
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme:function() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      userSelect: 'none',
      color: this.getTheme().textColor
    };
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement("div", {className: "close_button", onClick: this.props.onClick}, 
        React.createElement(SvgIcon, {style: style}, 
          React.createElement("path", {fill: style.color, d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})
        )
      )
    );
  }
});

module.exports = React.createClass({displayName: "exports",
  render:function() {
    return (
      React.createElement(Paper, {className: "window", zDepth: 1, rounded: false}, 
        React.createElement("img", {src: "static/go.png", alt: ""}), 
        React.createElement("div", {className: "info"}, 
          React.createElement(TextField, {disabled: true, defaultValue: "John Box", floatingLabelText: "Імя"}), 
          React.createElement(TextField, {disabled: true, defaultValue: "dd.mm.yy", floatingLabelText: "Дата народження"})

        ), 
        React.createElement(CloseButton, {onClick: this.props.close})
      )
    );
  }
});
