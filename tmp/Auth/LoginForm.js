var React = require('react');
var Router = require('react-router');
var Cookie = require('js-cookie');
var $__0=    Router,Navigation=$__0.Navigation;
var $__1=    require('jquery'),ajax=$__1.ajax;
var mui = require('material-ui');
var $__2=     mui,RaisedButton=$__2.RaisedButton,TextField=$__2.TextField;
var routes = require('../routes');

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {username: '', passwd: ''};
  },
  onSubmit:function(e) {
    var that = this;
    e.preventDefault();
    ajax({
      url: this.props.url + 'login/',
      type: 'POST',
      data: {
        username: this.state.username,
        passwd: this.state.passwd
      },
      success: function (data) {
        if (!data.e) {
          var user = data.a;
          Cookie.set('user', user);
          that.transitionTo('main', {username: user.username});
        } else {
          alert(data.e);
        }
      },
      error: function (e) {
        alert(e.responseText);
      }
    });
  },
  usernameInput:function(e) {
    this.setState({username: e.target.value});
  },
  passwordInput:function(e) {
    this.setState({passwd: e.target.value});
  },
  render:function() {
    return (
      React.createElement("div", {className: "start_form"}, 
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(TextField, {hintText: 'Логін', onChange: this.usernameInput}), React.createElement("br", null), 
          React.createElement(TextField, {type: "password", hintText: 'Пароль', onChange: this.passwordInput}), React.createElement("br", null), React.createElement("br", null), 
          React.createElement(RaisedButton, {label: "Війти", style: {width: '100%'}})
        )
      )
    );
  }
});
