var React = require('react');
var mui = require('material-ui');
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
  },  render: function () {
    return (
      React.createElement("div", {className: "message_bar"}, 
        React.createElement("h1", null, "MessageBar")
      )
    );
  }
});