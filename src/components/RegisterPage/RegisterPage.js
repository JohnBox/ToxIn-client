var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');

module.exports = React.createClass({displayName: "exports",
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function () {
    return (
      React.createElement("div", {className: "register_page"}, 
        React.createElement(mui.Paper, null, 
          React.createElement(RegisterForm, null)
        )
      )
    );
  }
});
var RegisterForm = React.createClass({displayName: "RegisterForm",
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    return {login: '', passwd: '', confirm_passwd: '', email: ''};
  },
  onSubmit: function () {
    alert(''+this.state.login+'|'+this.state.passwd+'|'+this.state.confirm_passwd+'|'+this.state.email);
    if (this.state.login && this.state.passwd && this.state.confirm_passwd && this.state.email) {
    }
  },
  loginInput: function (e) {
    this.setState({login: e.target.value});
  },
  passwordInput: function (e) {
    this.setState({passwd: e.target.value});
  },
  confirmPasswordInput: function (e) {
    this.setState({confirm_passwd: e.target.value});
  },
  emailInput: function (e) {
    this.setState({email: e.target.value});
  },
  render: function () {
    return (
      React.createElement("div", {className: "register_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(mui.TextField, {hint: 'Логін', onChange: this.loginInput}), 
          React.createElement("br", null), 
          React.createElement(mui.TextField, {type: "password", hint: 'Пароль', onChange: this.passwordInput}), 
          React.createElement("br", null), 
          React.createElement(mui.TextField, {type: "password", hint: 'Підтвердження паролю', onChange: this.confirmPasswordInput}), 
          React.createElement("br", null), 
          React.createElement(mui.TextField, {type: "email", hint: 'Електронна пошта', onChange: this.emailInput}), 
          React.createElement("br", null), 
          React.createElement(mui.RaisedButton, {label: "Зареєструватися"})
        ), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});