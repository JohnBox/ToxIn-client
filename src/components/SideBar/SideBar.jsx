var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
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
  render: function () {
    return (
      <div className="side_bar">
        <mui.Paper zDepth={5}>
          <UserHeader/>
          <div className="full"></div>
        </mui.Paper>
        <RouteHandler/>
      </div>
    );
  }
});

var UserHeader = React.createClass({
  render: function () {
    return (
      <div className="user_header">
        <div className="user_logo">
          <img src="go.png" alt=""/>
        </div>
        <div className="user_name">
          John Box
        </div>
      </div>
    );
  }
});
