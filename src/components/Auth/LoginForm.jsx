var React = require('react');
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;

module.exports = React.createClass({
  getInitialState: function () {
    return {login: '', passwd: ''};
  },
  onSubmit: function () {
    alert(this.state.login+': '+this.state.passwd)
    if (this.state.login === 'gott' && this.state.passwd === 'admin') {

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
