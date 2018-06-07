var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
require("react-tap-event-plugin")();
var Cookies = require('js-cookie');


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
    return {darkTheme: Cookies.get('darkTheme') === 'true'};
  },
  toggleTheme() {
    this.setState({darkTheme: !this.state.darkTheme});
  },
  render() {
    ThemeManager.setTheme(this.state.darkTheme?ThemeManager.types.DARK:ThemeManager.types.LIGHT);
    return (
      <div className="app">
        <RouteHandler toggleTheme={this.toggleTheme}/>
      </div>
    );
  }
});