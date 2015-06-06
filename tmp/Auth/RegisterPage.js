var React = require('react');
var Router = require('react-router');
var $__0=     Router,RouteHandler=$__0.RouteHandler,Navigation=$__0.Navigation;
var mui = require('material-ui');
var $__1=     mui,AppBar=$__1.AppBar,Paper=$__1.Paper;
var About = require('./About');
var RightButton = require('./../Button/RightButton');
var RegisterForm = require('./../Form/RegisterForm');

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  render:function() {
    var user = this.props.user();
    if (user){
      this.transitionTo('main', {user: user});
    }
    return (
      React.createElement("div", {className: "register_page"}, 
        React.createElement(Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn", iconElementRight: React.createElement(RightButton, {link: 'login', label: 'Війти'})}), 
          React.createElement(RegisterForm, null), 
          React.createElement(About, null)
        )
      )
    );
  }
});

