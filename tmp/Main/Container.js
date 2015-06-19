var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var Cookie = require('js-cookie');
var $ = require('jquery');
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,FontIcon=$__1.FontIcon;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var UserWindow = require('../Window/UserWindow');
var ContactWindow = require('../Window/ContactWindow');
var MessageWindow = require('../Window/MessageWindow');

var windowTypes = {
  NONE: 0,
  USER: 1,
  CONTACT: 2,
  MESSAGE: 3
};

module.exports = React.createClass({displayName: "exports",
  render:function() {
    var window;
    switch (this.props.window) {
      case windowTypes.USER:
        window = React.createElement(UserWindow, {close: this.props.closeWindow});
        break;
      case windowTypes.CONTACT:
        window = React.createElement(ContactWindow, {close: this.props.closeWindow});
        break;
      case windowTypes.MESSAGE:
        window = React.createElement(MessageWindow, {close: this.props.closeWindow});
        break;
      case windowTypes.NONE:
      default:
        window = null;
    }
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(AppBar, {title: "", 
                iconElementLeft: React.createElement(ToggleButton, {togglePanel: this.props.togglePanel}), 
                iconElementRight: React.createElement(OutButton, null), 
                zDepth: 0}), 
        window
      )
    );
  }
});
