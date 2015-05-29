var React = require('react');
var mui = require('material-ui');

module.exports = React.createClass({displayName: "exports",
  render: function () {
    return (
      React.createElement(mui.Paper, null, 
        React.createElement("div", {className: "start_page"}, 
          React.createElement(StartLogo, null), 
          React.createElement(StartForm, {onLogin: this.props.onLogin})
        )
      )
    );
  }
});

var StartLogo = React.createClass({displayName: "StartLogo",
  render: function () {
    return (
      React.createElement("div", {className: "start_logo"}, 
        React.createElement("img", {src: "go.png", alt: ""})
      )
    );
  }
});

var StartForm = React.createClass({displayName: "StartForm",
  getInitialState: function () {
    return {login: '', passwd: ''};
  },
  onSubmit: function () {
    if (this.state.login && this.state.passwd) {
      var data = {
        login: 'gott',
        passwd: 'admin'
      };
      if (this.state.login == data.login && this.state.passwd == data.passwd) {
        this.props.onLogin(true);
      }
    }
  },
  loginInput: function (e) {
    this.setState({login: e.target.value, passwd: this.state.passwd});
  },
  passwordInput: function (e) {
    this.setState({login: this.state.login, passwd: e.target.value});
  },
  render: function () {
    return (
      React.createElement("div", {className: "start_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(mui.TextField, {hint: "Логін", onChange: this.loginInput}), 
          React.createElement("br", null), 
          React.createElement(mui.TextField, {type: "password", hint: "Пароль", onChange: this.passwordInput}), 
          React.createElement("br", null), 
          React.createElement(mui.RaisedButton, {label: "Війти"}), 
          React.createElement(mui.RaisedButton, {label: "Зареєструватися"})
        )
      )
    );
  }
});