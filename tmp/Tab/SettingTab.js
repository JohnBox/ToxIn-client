var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var $__1=      mui,AppBar=$__1.AppBar,Paper=$__1.Paper,Menu=$__1.Menu;

module.exports = React.createClass({displayName: "exports",
  onToggle:function() {
    this.props.toggleTheme();
  },
  render:function() {
    var settings = [
      { text: 'Тема', toggle: true }
    ];
    return (
      React.createElement("div", {className: "setting_tab"}, 
        React.createElement(Menu, {menuItems: settings, autoWidth: false, zDepth: 0, onToggle: this.onToggle})
      )
    );
  }
});