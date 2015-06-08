var React = require('react');
var $ = require('jquery');
var mui = require('material-ui');
var $__0=      mui,IconButton=$__0.IconButton,SvgIcon=$__0.SvgIcon,Snackbar=$__0.Snackbar;
var StylePropable = mui.Mixins.StylePropable;

module.exports = React.createClass({displayName: "exports",
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
  },
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getTheme:function() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      width: '24px',
      height: '24px',
      float: 'right',
      marginTop: '14px',
      marginBottom: '-14px',
      color: this.getTheme().textColor
    };
  },
  onSnackBar:function() {
    this.refs.snack.show();
    setTimeout(function(){this.refs.snack.dismiss()}.bind(this), 4000);
    var user = this.context.router.getCurrentParams().user;
    $.ajax({
      url: this.props.url + 'addcontacttouser',
      method: 'POST',
      data: {user: user, contact: this.props.user[0]}
    });
  },
  render:function() {
    var style = this.getStyles();
    var message = this.props.user[1] + ' доданий у контакти';
    return (
      React.createElement("span", null, 
      React.createElement("span", {className: "add_contact"}, 
      React.createElement(SvgIcon, {style: style, onClick: this.onSnackBar}, 
        React.createElement("path", {fill: style.color, d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"})
      )
      ), 
        React.createElement(Snackbar, {ref: "snack", message: message})
      )
    );
  }
});