var React = require('react');
var Cookie = require('js-cookie');
var $__0=       require('react-router'),Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var $__1=    require('jquery'),ajax=$__1.ajax;
var mui = require('material-ui');
var $__2=         mui,AppBar=$__2.AppBar,Paper=$__2.Paper,RaisedButton=$__2.RaisedButton,SvgIcon=$__2.SvgIcon,TextField=$__2.TextField,DropDownMenu=$__2.DropDownMenu;
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
  mixins: [Navigation],
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {userProfile: null};
  },
  render:function() {
    return (
      React.createElement(Paper, {className: "window", zDepth: 1, rounded: false}, 
        React.createElement("div", {className: "message"}
        ), 
        React.createElement(CloseButton, {onClick: this.props.close})
      )
    );
  }
});
