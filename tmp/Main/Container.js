var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var $ = require('jquery');
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,FontIcon=$__1.FontIcon;
var Transitions = mui.Styles.Transitions;
var UserWindow = require('../Window/UserWindow');

module.exports = React.createClass({displayName: "exports",
  contextTypes: {
    router: React.PropTypes.func
  },
  render:function() {
    var window;
    if (!this.props.window) {
      window = React.createElement("img", {src: "static/ti.png"});
    } else {
      window = React.createElement(this.props.window, {close: this.props.close});
    }
    return (
      React.createElement("div", {className: "container", style: this.props.style}, 
        window
      )
    );
  }
});