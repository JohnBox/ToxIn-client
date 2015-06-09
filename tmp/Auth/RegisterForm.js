var React = require('react');
var $__0=    require('jquery'),ajax=$__0.ajax;
var mui = require('material-ui');
var $__1=     mui,RaisedButton=$__1.RaisedButton,TextField=$__1.TextField;

module.exports = React.createClass({displayName: "exports",
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'}
  },
  getInitialState:function() {
    return {username: '', first_name: '',last_name: '', email: '', passwd: '', confirm_passwd: ''};
  },
  isValid:function() {
    var f = this.state;
    return f.username && f.first_name && f.last_name && f.email && f.passwd;
  },
  isPasswdValid:function() {
    return this.state.passwd === this.state.confirm_passwd;
  },
  onSubmit:function(e) {
    var that = this;
    e.preventDefault();
    if (this.isValid() && this.isPasswdValid()) {
      ajax({
        url: this.props.url + 'register/',
        method: 'POST',
        data: {
          username: this.state.username,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          passwd: this.state.passwd
        },
        success: function (data) {
          if (!data.e) {
            that.props.toggleLogin();
          } else {
            alert(data.e);
          }
        },
        error: function (e) {
          alert(e.message());
        }
      });
    }
  },
  usernameInput:function(e) {
    this.setState({username: e.target.value});
  },
  firstnameInput:function(e) {
    this.setState({first_name: e.target.value});
  },
  lastnameInput:function(e) {
    this.setState({last_name: e.target.value});
  },
  emailInput:function(e) {
    this.setState({email: e.target.value});
  },
  passwordInput:function(e) {
    this.setState({passwd: e.target.value});
  },
  confirmPasswordInput:function(e) {
    this.setState({confirm_passwd: e.target.value});
  },
  render:function() {
    return (
      React.createElement("div", {className: "register_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(TextField, {hintText: 'Логін', onChange: this.usernameInput}), React.createElement("br", null), 
          React.createElement(TextField, {hintText: 'Ім`я', onChange: this.firstnameInput}), React.createElement("br", null), 
          React.createElement(TextField, {hintText: 'Прізвище', onChange: this.lastnameInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "email", hintText: 'Електронна пошта', onChange: this.emailInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "password", hintText: 'Пароль', onChange: this.passwordInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "password", hintText: 'Підтвердження паролю', onChange: this.confirmPasswordInput}), React.createElement("br", null), React.createElement("br", null), 
          React.createElement(RaisedButton, {label: "Зареєструватися", style: {width: '100%'}})
        )
      )
    );
  }
});
