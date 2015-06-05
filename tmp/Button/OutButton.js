var React = require('react');
var $__0=      require('material-ui'),RaisedButton=$__0.RaisedButton,SvgIcon=$__0.SvgIcon,IconButton=$__0.IconButton;

module.exports = React.createClass({displayName: "exports",
  getStyles:function() {
    return { width: '36px', height: '36px' };
  },
  logOut:function() {
    this.props.user(null);
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement(IconButton, {className: "out_button", tooltip: "Вийти", onClick: this.logOut}, 
        React.createElement(SvgIcon, {style: style}, 
          React.createElement("path", {d: "M0 0h24v24H0z", fill: "none"}), 
          React.createElement("path", {d: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})
        )
      )
    );
  }
});