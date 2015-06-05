var React = require('react');
var LoginPage = require('../Auth/LoginPage');
var MainPage = require('../Main/MainPage');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
require("react-tap-event-plugin")();

module.exports = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState() {
    return {user: null, darkTheme: false};
  },
  user(user) {
    if (user === undefined) {
      return this.state.user;
    }
    this.setState({user: user});
  },
  theme() {
    ThemeManager.setTheme(this.state.darkTheme?ThemeManager.types.DARK:ThemeManager.types.LIGHT);
    this.setState({darkTheme: !this.state.darkTheme});
  },
  render() {
    var page = this.state.user
      ? <MainPage user={this.user} theme={this.theme}/>
      : <LoginPage user={this.user}/>;
    return (
      <div className="app">
        {page}
      </div>
    );
  }
});