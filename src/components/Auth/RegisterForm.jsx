var React = require('react');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;

module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'}
  },
  getInitialState() {
    return {username: '', first_name: '',last_name: '', email: '', passwd: '', confirm_passwd: ''};
  },
  isValid() {
    var f = this.state;
    return f.username && f.first_name && f.last_name && f.email && f.passwd;
  },
  isPasswdValid() {
    return this.state.passwd === this.state.confirm_passwd;
  },
  onSubmit(e) {
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
  usernameInput(e) {
    this.setState({username: e.target.value});
  },
  firstnameInput(e) {
    this.setState({first_name: e.target.value});
  },
  lastnameInput(e) {
    this.setState({last_name: e.target.value});
  },
  emailInput(e) {
    this.setState({email: e.target.value});
  },
  passwordInput(e) {
    this.setState({passwd: e.target.value});
  },
  confirmPasswordInput(e) {
    this.setState({confirm_passwd: e.target.value});
  },
  render() {
    return (
      <div className="register_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.usernameInput}/><br/>
          <TextField hintText={'Ім`я'} onChange={this.firstnameInput}/><br/>
          <TextField hintText={'Прізвище'} onChange={this.lastnameInput}/><br/>
          <TextField type="email" hintText={'Електронна пошта'} onChange={this.emailInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/>
          <TextField type="password" hintText={'Підтвердження паролю'} onChange={this.confirmPasswordInput}/><br/><br/>
          <RaisedButton label="Зареєструватися" style={{width: '100%'}}/>
        </form>
      </div>
    );
  }
});
