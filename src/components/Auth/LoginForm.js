const React = require('react');
const Router = require('react-router');
const Cookie = require('js-cookie');
const { Navigation } = Router;
const { ajax } = require('jquery');
const { RaisedButton, TextField } = require('material-ui');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://93.73.179.185:8000/'};
  },
  getInitialState() {
    return {username: '', password: ''};
  },
  onSubmit(e) {
    let that = this;
    e.preventDefault();
    ajax({
      url: this.props.url + 'sign-in/',
      type: 'POST',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: function (data) {
        if (!data.e) {
          let user = data.a;
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
  usernameInput(e) {
    this.setState({username: e.target.value});
  },
  passwordInput(e) {
    this.setState({password: e.target.value});
  },
  render() {
    return (
      <div className="start_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.usernameInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/><br/>
          <RaisedButton label="Війти" style={{width: '100%'}}/>
        </form>
      </div>
    );
  }
});
