var React = require('react');
var mui = require('material-ui');
var $__0=     mui,RaisedButton=$__0.RaisedButton,Snackbar=$__0.Snackbar;
var StylePropable = mui.Mixins.StylePropable;
var $ = require('jquery');
var Cookie = require('js-cookie');


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
  render:function() {
    var style = this.getStyles();
    var fullname = Cookie.getJSON('user')[1];
    return (
      React.createElement("div", {className: "profile_button", style: style, onClick: this.props.onClick}, 
        fullname
      )
    );
  }
});