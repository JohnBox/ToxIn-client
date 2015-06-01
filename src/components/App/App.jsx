var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
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
      <div className="app">
        <RouteHandler onLogin={this.userLogined} theme={this.theme}/>
      </div>
    );
  }
});