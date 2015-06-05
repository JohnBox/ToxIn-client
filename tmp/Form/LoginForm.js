var React = require('react');
var Router = require('react-router');
var $__0=    Router,Navigation=$__0.Navigation;
var mui = require('material-ui');
var $__1=     mui,RaisedButton=$__1.RaisedButton,TextField=$__1.TextField;
var routes = require('../routes');

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  getInitialState:function() {
    return {login: '', passwd: ''};
  },
  onSubmit:function(e) {
    e.preventDefault();
    if (this.state.login === 'gott' && this.state.passwd === 'admin') {
      this.props.user(this.state.login);
      this.transitionTo('main', {user: this.state.login})
    }
  },
  loginInput:function(e) {
    this.setState({login: e.target.value});
  },
  passwordInput:function(e) {
    this.setState({passwd: e.target.value});
  },
  render:function() {
    return (
      React.createElement("div", {className: "start_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(TextField, {hintText: 'Логін', onChange: this.loginInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "password", hintText: 'Пароль', onChange: this.passwordInput}), React.createElement("br", null), React.createElement("br", null), 
          React.createElement(RaisedButton, {label: "Війти", style: {width: '100%'}})
        )
      )
    );
  }
});
