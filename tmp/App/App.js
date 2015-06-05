var React = require('react');
var LoginPage = require('../Auth/LoginPage');
var MainPage = require('../Main/MainPage');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
require("react-tap-event-plugin")();

module.exports = React.createClass({displayName: "exports",
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext:function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState:function() {
    return {user: null, darkTheme: false};
  },
  user:function(user) {
    if (user === undefined) {
      return this.state.user;
    }
    this.setState({user: user});
  },
  theme:function() {
    ThemeManager.setTheme(this.state.darkTheme?ThemeManager.types.DARK:ThemeManager.types.LIGHT);
    this.setState({darkTheme: !this.state.darkTheme});
  },
  render:function() {
    var page = this.state.user
      ? React.createElement(MainPage, {user: this.user, theme: this.theme})
      : React.createElement(LoginPage, {user: this.user});
    return (
      React.createElement("div", {className: "app"}, 
        page
      )
    );
  }
});