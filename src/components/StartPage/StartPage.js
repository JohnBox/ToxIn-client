var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var $__1=    mui,AppBar=$__1.AppBar;
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
      React.createElement("div", {className: "start_page"}, 
        React.createElement(mui.Paper, {className: "paper"}, 
          React.createElement(AppBar, {title: "ToxIn", iconElementRight: React.createElement(RegisterButton, null)}), 
          React.createElement(StartLogo, null), 
          React.createElement(StartForm, {onLogin: this.props.onLogin})
        ), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function () {
    return (
      React.createElement("div", {className: "logo"}, 
        "ToxIn"
      )
    );
  }
});

var RegisterButton = React.createClass({displayName: "RegisterButton",
  render: function () {
    return (
      React.createElement(Link, {to: "register"}, 
        React.createElement(mui.FlatButton, {className: "register_button", label: "Зареєструватися", hoverColor: "#eee"})
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
      var data = {login: 'gott', passwd: 'admin'};
      if (this.state.login == data.login && this.state.passwd == data.passwd) {
        this.props.onLogin(true);
      }
    }
    return false;
  },
  loginInput: function (e) {
    this.setState({login: e.target.value});
  },
  passwordInput: function (e) {
    this.setState({passwd: e.target.value});
  },
  render: function () {
    return (
      React.createElement("div", {className: "start_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(mui.TextField, {hintText: 'Логін', onChange: this.loginInput}), 
          React.createElement("br", null), 
          React.createElement(mui.TextField, {type: "password", hintText: 'Пароль', onChange: this.passwordInput}), 
          React.createElement("br", null), 
          React.createElement(mui.RaisedButton, {label: "Війти"})
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
