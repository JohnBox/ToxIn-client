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
    return {logined: false, theme: true};
  },
  userLogined: function (logined) {
    this.setState({logined: logined});
  },
  theme: function () {
    if (this.state.theme) {
      ThemeManager.setTheme(ThemeManager.types.LIGHT);
    } else {
      ThemeManager.setTheme(ThemeManager.types.DARK);
    }
    this.setState({theme: !this.state.theme});
  },
  render: function () {
    return (
      React.createElement("div", {className: "app"}, 
        React.createElement(RouteHandler, {onLogin: this.userLogined, theme: this.theme})
      )
    );
  }
});