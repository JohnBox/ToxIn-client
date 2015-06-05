var React = require('react');
var mui = require('material-ui');
var $__0=      mui,AppBar=$__0.AppBar,Paper=$__0.Paper,RaisedButton=$__0.RaisedButton;
var About = require('./About');
var RightButton = require('./../Button/RightButton');
var LoginForm = require('./../Form/LoginForm');
var RegisterForm = require('./../Form/RegisterForm');

module.exports = React.createClass({displayName: "exports",
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {login: true};
  },
  toggleLogin:function() {
    this.setState({login: !this.state.login});
  },
  render: function () {
    var button, form;
    if (this.state.login) {
      button = React.createElement(RightButton, {label: 'Зареєструватися', onClick: this.toggleLogin});
      form = React.createElement(LoginForm, {user: this.props.user});
    } else {
      button = React.createElement(RightButton, {label: 'Зареєструватися', onClick: this.toggleLogin});
      form = React.createElement(RegisterForm, {user: this.props.user});
    }
    return (
      React.createElement("div", {className: "start_page"}, 
        React.createElement(Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn", iconElementRight: button}), 
          form, 
          React.createElement(About, null)
        )
      )
    );
  }
});


