let React = require('react');
let { ajax } = require('jquery');
let mui = require('material-ui');
let { RaisedButton, TextField } = mui;

module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://127.0.0.1:8000/'}
  },
  getInitialState() {
    return {username: '', first_name: '',last_name: '', email: '', password: '', confirm_password: ''};
  },
  isValid() {
    let f = this.state;
    return f.username && f.first_name && f.last_name && f.email && f.password;
  },
  isPasswordValid() {
    return this.state.password === this.state.confirm_password;
  },
  onSubmit(e) {
    let that = this;
    e.preventDefault();
    if (this.isValid() && this.isPasswordValid()) {
      ajax({
        url: this.props.url + 'sign-up/',
        method: 'POST',
        data: {
          username: this.state.username,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
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
  firstNameInput(e) {
    this.setState({first_name: e.target.value});
  },
  lastNameInput(e) {
    this.setState({last_name: e.target.value});
  },
  emailInput(e) {
    this.setState({email: e.target.value});
  },
  passwordInput(e) {
    this.setState({password: e.target.value});
  },
  confirmPasswordInput(e) {
    this.setState({confirm_password: e.target.value});
  },
  render() {
    return (
      <div className="register_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.usernameInput}/><br/>
          <TextField hintText={'Ім`я'} onChange={this.firstNameInput}/><br/>
          <TextField hintText={'Прізвище'} onChange={this.lastNameInput}/><br/>
          <TextField type="email" hintText={'Електронна пошта'} onChange={this.emailInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/>
          <TextField type="password" hintText={'Підтвердження паролю'} onChange={this.confirmPasswordInput}/><br/><br/>
          <RaisedButton label="Зареєструватися" style={{width: '100%'}}/>
        </form>
      </div>
    );
  }
});
