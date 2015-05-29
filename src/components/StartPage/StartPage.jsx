var React = require('react');
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

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },
  render: function () {
    return (
      <mui.Paper>
        <div className="start_page">
          <StartLogo />
          <StartForm onLogin={this.props.onLogin}/>
        </div>
      </mui.Paper>
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

var StartForm = React.createClass({
  getInitialState: function () {
    return {login: '', passwd: ''};
  },
  onSubmit: function () {
    if (this.state.login && this.state.passwd) {
      var data = {
        login: 'gott',
        passwd: 'admin'
      };
      if (this.state.login == data.login && this.state.passwd == data.passwd) {
        this.props.onLogin(true);
      }
    }
  },
  loginInput: function (e) {
    this.setState({login: e.target.value, passwd: this.state.passwd});
  },
  passwordInput: function (e) {
    this.setState({login: this.state.login, passwd: e.target.value});
  },
  render: function () {
    return (
      <div className="start_form">
        <form onSubmit={this.onSubmit}>
          <mui.TextField hint="Логін" onChange={this.loginInput} />
          <br/>
          <mui.TextField type="password" hint="Пароль" onChange={this.passwordInput} />
          <br/>
          <mui.RaisedButton label="Війти" />
          <mui.RaisedButton label="Зареєструватися" />
        </form>
      </div>
    );
  }
});