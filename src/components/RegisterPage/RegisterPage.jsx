var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');

module.exports = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function () {
    return (
      <div className="register_page">
        <mui.Paper>
          <RegisterForm/>
        </mui.Paper>
      </div>
    );
  }
});
var RegisterForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    return {login: '', passwd: '', confirm_passwd: '', email: ''};
  },
  onSubmit: function () {
    alert(''+this.state.login+'|'+this.state.passwd+'|'+this.state.confirm_passwd+'|'+this.state.email);
    if (this.state.login && this.state.passwd && this.state.confirm_passwd && this.state.email) {
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
          <mui.TextField hint={'Логін'} onChange={this.loginInput}/>
          <br/>
          <mui.TextField type="password" hint={'Пароль'} onChange={this.passwordInput}/>
          <br/>
          <mui.TextField type="password" hint={'Підтвердження паролю'} onChange={this.confirmPasswordInput}/>
          <br/>
          <mui.TextField type="email" hint={'Електронна пошта'} onChange={this.emailInput}/>
          <br/>
          <mui.RaisedButton label="Зареєструватися"/>
        </form>
        <RouteHandler/>
      </div>
    );
  }
});