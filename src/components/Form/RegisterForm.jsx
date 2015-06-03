var React = require('react');
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'}
  },
  getInitialState: function () {
    return {login: '', passwd: '', confirm_passwd: '', email: ''};
  },
  onSubmit: function () {
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
  loginInput: function (e) {
    this.setState({login: e.target.value});
  },
  passwordInput: function (e) {
    this.setState({passwd: e.target.value});
  },
  confirmPasswordInput: function (e) {
    this.setState({confirm_passwd: e.target.value});
  },
  emailInput: function (e) {
    this.setState({email: e.target.value});
  },
  render: function () {
    return (
      <div className="register_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.loginInput}/>
          <br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/>
          <br/>
          <TextField type="password" hintText={'Підтвердження паролю'} onChange={this.confirmPasswordInput}/>
          <br/>
          <TextField type="email" hintText={'Електронна пошта'} onChange={this.emailInput}/>
          <br/>
          <RaisedButton label="Зареєструватися"/>
        </form>
      </div>
    );
  }
});
