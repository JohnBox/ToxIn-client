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
  shouldComponentUpdate() {
    //if (this.state.user) { return false; }
    return true;
  },
  render() {
    return (
      <div className="app">
        <RouteHandler user={this.user} theme={this.theme}/>
      </div>
    );
  }
});