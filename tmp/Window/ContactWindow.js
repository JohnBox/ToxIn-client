var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,FontIcon=$__1.FontIcon;

module.exports = React.createClass({displayName: "exports",
  render:function() {
    return (
      React.createElement(Paper, {className: "window", zDepth: 1, rounded: false}, 
        React.createElement("img", {src: "static/go.png", alt: ""}), 
        "contact", 
        React.createElement(RaisedButton, {label: "close", onClick: this.props.close})

      )
    );
  }
});
