var React = require('react');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'}
  },
  getInitialState() {
    return {username: '', login: '', passwd: '', confirm_passwd: '', email: ''};
  },
  onSubmit(e) {
    var that = this;
    e.preventDefault();
    if (this.state.username &&
      this.state.login &&
      this.state.passwd &&
      this.state.confirm_passwd &&
      this.state.email) {
      if (this.state.passwd === this.state.confirm_passwd) {
        ajax({
          url: this.props.url + 'register/',
          method: 'POST',
          crossDomain: true,
          data: {
            username: this.state.username,
            login: this.state.login,
            passwd: this.state.passwd,
            email: this.state.email
          },
          success: function (data) {
            that.props.toggleLogin();
          },
          error: function (e) {
            alert(e.message());
          }
        });
      }
    }
  },
  nameInput(e) {
    this.setState({username: e.target.value});
  },
  loginInput(e) {
    this.setState({login: e.target.value});
  },
  passwordInput(e) {
    this.setState({passwd: e.target.value});
  },
  confirmPasswordInput(e) {
    this.setState({confirm_passwd: e.target.value});
  },
  emailInput(e) {
    this.setState({email: e.target.value});
  },
  render() {
    return (
      <div className="register_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.loginInput}/><br/>
          <TextField hintText={'Імя'} onChange={this.nameInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/>
          <TextField type="password" hintText={'Підтвердження паролю'} onChange={this.confirmPasswordInput}/><br/>
          <TextField type="email" hintText={'Електронна пошта'} onChange={this.emailInput}/><br/><br/>
          <RaisedButton label="Зареєструватися" style={{width: '100%'}}/>
        </form>
      </div>
    );
  }
});
