var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
require("react-tap-event-plugin")();

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext:function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState:function() {
    return {darkTheme: false};
  },
  toggleTheme:function() {
    this.setState({darkTheme: !this.state.darkTheme});
  },
  render:function() {
    ThemeManager.setTheme(this.state.darkTheme?ThemeManager.types.DARK:ThemeManager.types.LIGHT);
    return (
      React.createElement("div", {className: "app"}, 
        React.createElement(RouteHandler, {toggleTheme: this.toggleTheme})
      )
    );
  }
});