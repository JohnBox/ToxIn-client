var React = require('react');
var mui = require('material-ui');
var $__0=     mui,RaisedButton=$__0.RaisedButton,TextField=$__0.TextField;

module.exports = React.createClass({displayName: "exports",
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'}
  },
  getInitialState:function() {
    return {name: '', login: '', passwd: '', confirm_passwd: '', email: ''};
  },
  onSubmit:function() {
    alert(this.props.url);
    if (this.state.login && this.state.passwd && this.state.confirm_passwd && this.state.email) {
      if (this.state.passwd === this.state.confirm_passwd) {
        $.ajax({
          url: this.props.url+'register/',
          method: 'POST',
          data: {
            login: this.state.login,
            passwd: this.state.passwd,
            email: this.state.email
          },
          success: function (data) {
            alert(data.s);
          }
        });
      }
    }
  },
  nameInput:function(e) {
    this.setState({name: e.target.value});
  },
  loginInput:function(e) {
    this.setState({login: e.target.value});
  },
  passwordInput:function(e) {
    this.setState({passwd: e.target.value});
  },
  confirmPasswordInput:function(e) {
    this.setState({confirm_passwd: e.target.value});
  },
  emailInput:function(e) {
    this.setState({email: e.target.value});
  },
  render:function() {
    return (
      React.createElement("div", {className: "register_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(TextField, {hintText: 'Логін', onChange: this.loginInput}), React.createElement("br", null), 
          React.createElement(TextField, {hintText: 'Імя', onChange: this.nameInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "password", hintText: 'Пароль', onChange: this.passwordInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "password", hintText: 'Підтвердження паролю', onChange: this.confirmPasswordInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "email", hintText: 'Електронна пошта', onChange: this.emailInput}), React.createElement("br", null), React.createElement("br", null), 
          React.createElement(RaisedButton, {label: "Зареєструватися", style: {width: '100%'}})
        )
      )
    );
  }
});
