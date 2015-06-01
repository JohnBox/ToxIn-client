var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');

module.exports = React.createClass({displayName: "exports",
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState: function () {
    return {user: null, logined: false, theme: true};
  },
  setUser: function (user = null, logined =null) {
    if (!user) {
      return {user: this.state.user, logined: this.state.logined};
    } else {
      this.setState({user: user, logined: logined});
    }
  },
  theme: function () {
    ThemeManager.setTheme(this.state.theme?ThemeManager.types.LIGHT:ThemeManager.types.DARK);
    this.setState({theme: !this.state.theme});
  },
  render: function () {
    return (
      React.createElement("div", {className: "app"}, 
        React.createElement(RouteHandler, {setUser: this.setUser, theme: this.theme})
      )
    );
  }
});