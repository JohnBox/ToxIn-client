const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link, Navigation } = Router;
const ThemeManager = require('material-ui/lib/styles/theme-manager')();
require("react-tap-event-plugin")();
const Cookies = require('js-cookie');


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
        <RouteHandler toggleTheme={this.toggleTheme} darkTheme={this.state.darkTheme}/>
      </div>
    );
  }
});