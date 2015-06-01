var React = require('react');
var Router = require('react-router');
var $__0=     Router,RouteHandler=$__0.RouteHandler,Navigation=$__0.Navigation;
var mui = require('material-ui');
var $__1=     mui,AppBar=$__1.AppBar,Paper=$__1.Paper;
var About = require('./About');
var RightButton = require('./RightButton');
var LoginForm = require('./LoginForm');

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  render: function () {
    var user = this.props.setUser();
    if (user.logined){
      this.transitionTo('main', {user: user.user});
    }
    return (
      React.createElement("div", {className: "start_page"}, 
        React.createElement(Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn", iconElementRight: React.createElement(RightButton, {link: 'register', label: 'Зареєструватися'})}), 
          React.createElement(LoginForm, {setUser: this.props.setUser}), 
          React.createElement(About, null)
        )
      )
    );
  }
});


