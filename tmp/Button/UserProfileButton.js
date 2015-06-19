var React = require('react');
var mui = require('material-ui');
var $__0=     mui,RaisedButton=$__0.RaisedButton,Snackbar=$__0.Snackbar;
var StylePropable = mui.Mixins.StylePropable;
var $ = require('jquery');
var Cookie = require('js-cookie');

var windowTypes = {
  NONE: 0,
  USER: 1,
  CONTACT: 2,
  MESSAGE: 3
};

module.exports = React.createClass({displayName: "exports",
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme:function() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      userSelect: 'none',
      color: this.getTheme().canvasColor
    };
  },
  onClick:function() {
    var user = Cookie.getJSON('user');
    this.props.onClick(windowTypes.USER);
  },
  render:function() {
    var style = this.getStyles();
    var user = Cookie.getJSON('user');
    var full_name = user.first_name +' '+ user.last_name;
    return (
      React.createElement("div", {className: "profile_button", style: style, onClick: this.onClick}, 
        full_name
      )
    );
  }
});