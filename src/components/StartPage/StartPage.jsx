var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar } = mui;
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
      <div className="start_page">
        <mui.Paper className="paper">
          <AppBar title='ToxIn' iconElementRight={<RegisterButton/>}/>
          <StartLogo/>
          <StartForm onLogin={this.props.onLogin}/>
        </mui.Paper>
        <RouteHandler/>
      </div>
    );
  }
});

var Logo = React.createClass({
  render: function () {
    return (
      <div className="logo">
        ToxIn
      </div>
    );
  }
});

var RegisterButton = React.createClass({
  render: function () {
    return (
      <Link to="register">
        <mui.FlatButton className="register_button" label="Зареєструватися" hoverColor="#eee"/>
      </Link>
    );
  }
});

var StartForm = React.createClass({
  getInitialState: function () {
    return {login: '', passwd: ''};
  },
  onSubmit: function () {
    if (this.state.login && this.state.passwd) {
      var data = {login: 'gott', passwd: 'admin'};
      if (this.state.login == data.login && this.state.passwd == data.passwd) {
        this.props.onLogin(true);
      }
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
          <mui.TextField hintText={'Логін'} onChange={this.loginInput}/>
          <br/>
          <mui.TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/>
          <br/>
          <mui.RaisedButton label="Війти"/>
        </form>
      </div>
    );
  }
});

var StartLogo = React.createClass({
  render: function () {
    return (
      <div className="start_logo">
        <img src="go.png" alt=""/>
      </div>
    );
  }
});
