var React = require('react');
var Router = require('react-router');
var { Navigation } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;
var routes = require('../routes');

$.ajaxSetup({
  type: 'POST',
  crossDomain: true
});

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {login: '', passwd: ''};
  },
  onSubmit(e) {
    var that = this;
    e.preventDefault();
    $.ajax({
      url: this.props.url + 'login/',
      data: {
        login: this.state.login,
        passwd: this.state.passwd
      },
      success: function (data) {
        that.transitionTo('main', {user: data.a})
      },
      error: function (e) {
        alert('ERROR');
      }
    });
  },
  loginInput(e) {
    this.setState({login: e.target.value});
  },
  passwordInput(e) {
    this.setState({passwd: e.target.value});
  },
  render() {
    return (
      <div className="start_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.loginInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/><br/>
          <RaisedButton label="Війти" style={{width: '100%'}}/>
        </form>
      </div>
    );
  }
});
