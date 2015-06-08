var React = require('react');
var Router = require('react-router');
var Cookie = require('js-cookie');
var $__0=    Router,Navigation=$__0.Navigation;
var $ = require('jquery');
var mui = require('material-ui');
var $__1=     mui,RaisedButton=$__1.RaisedButton,TextField=$__1.TextField;
var routes = require('../routes');

$.ajaxSetup({
  type: 'POST',
  crossDomain: true
});

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {login: '', passwd: ''};
  },
  onSubmit:function(e) {
    var that = this;
    e.preventDefault();
    $.ajax({
      url: this.props.url + 'login/',
      data: {
        login: this.state.login,
        passwd: this.state.passwd
      },
      success: function (data) {
        Cookie.set('user', data.a);
        that.transitionTo('main', {user: data.a[0]});
      },
      error: function (e) {
        alert('ERROR');
      }
    });
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
