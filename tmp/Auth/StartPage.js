var React = require('react');
var Router = require('react-router');
var Cookie = require('js-cookie');
var $__0=    Router,Navigation=$__0.Navigation;
var mui = require('material-ui');
var $__1=     mui,AppBar=$__1.AppBar,Paper=$__1.Paper;
var About = require('./About');
var RightButton = require('./../Button/RightButton');
var RegisterForm = require('./RegisterForm');
var LoginForm = require('./LoginForm');

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  getInitialState:function() {
    return {login: true};
  },
  toggleLogin:function() {
    this.setState({login: !this.state.login});
  },
  render:function() {
    var user = Cookie.getJSON('user');
    if (user !== undefined) {
      this.transitionTo('main', {username: user.username});
    }
    var button, form;
    if (this.state.login) {
      button = React.createElement(RightButton, {label: 'Зареєструватися', onClick: this.toggleLogin});
      form = React.createElement(LoginForm, {goTo: this.transitionTo});
    } else {
      button = React.createElement(RightButton, {label: 'Війти', onClick: this.toggleLogin});
      form = React.createElement(RegisterForm, {toggleLogin: this.toggleLogin})
    }
    return (
      React.createElement("div", {className: "start_page"}, 
        React.createElement(Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn", iconElementLeft: React.createElement(ToxInIcon, null), iconElementRight: button}), 
          form, 
          React.createElement(About, null)
        )
      )
    );
  }
});

var ToxInIcon = React.createClass({displayName: "ToxInIcon",
  render:function() {
    var style = {width: '50px', height: '50px'};
    return (
      React.createElement("img", {src: "static/ti.png", alt: "", style: style})
    );
  }
});
