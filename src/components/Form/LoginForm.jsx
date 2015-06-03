var React = require('react');
var Router = require('react-router');
var { Navigation } = Router;
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;
var routes = require('../routes');

module.exports = React.createClass({
  mixins: [Navigation],
  getInitialState: function () {
    return {login: '', passwd: ''};
  },
  onSubmit: function (e) {
    e.preventDefault();
    if (this.state.login === 'gott' && this.state.passwd === 'admin') {
      this.props.setUser(this.state.login, true);
      this.transitionTo('main',{user: this.state.login});
    }
  },
  loginInput: function (e) {
    this.setState({login: e.target.value});
  },
  passwordInput: function (e) {
    this.setState({passwd: e.target.value});
  },
  render: function () {
    return (
      <div className="start_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.loginInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/>
          <RaisedButton label="Війти"/>
        </form>
      </div>
    );
  }
});
