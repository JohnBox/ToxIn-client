var React = require('react');
var Router = require('react-router');
var { Navigation } = Router;
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;
var routes = require('../routes');

module.exports = React.createClass({
  mixins: [Navigation],
  getInitialState() {
    return {login: '', passwd: ''};
  },
  onSubmit(e) {
    e.preventDefault();
    if (this.state.login === 'gott' && this.state.passwd === 'admin') {
      this.props.user(this.state.login);
      this.transitionTo('main', {user: this.state.login})
    }
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
