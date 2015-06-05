var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
require("react-tap-event-plugin")();

module.exports = React.createClass({
  mixins: [Navigation],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState: function () {
    return {user: null,darkTheme: false};
  },
  user: function (user = null) {
    alert(user);
    if (!user) {
      return this.state.user;
    }
    this.setState({user: user});
  },
  theme: function () {
    ThemeManager.setTheme(this.state.darkTheme?ThemeManager.types.DARK:ThemeManager.types.LIGHT);
    this.setState({darkTheme: !this.state.darkTheme});
  },
  shouldComponentUpdate() {
    if (this.state.user) {
      return false;
    }
    return true;
  },
  render: function () {
    return (
      <div className="app">
        <RouteHandler user={this.user} theme={this.theme}/>
      </div>
    );
  }
});