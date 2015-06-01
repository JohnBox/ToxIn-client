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
      <div className="app">
        <RouteHandler setUser={this.setUser} theme={this.theme}/>
      </div>
    );
  }
});