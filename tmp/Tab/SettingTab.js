var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var $__1=      mui,AppBar=$__1.AppBar,Paper=$__1.Paper,Menu=$__1.Menu;

module.exports = React.createClass({displayName: "exports",
  render:function() {
    var mi = [
      { payload: '1', text: 'Text Opt-In', toggle: true},
      { payload: '2', text: 'Text Opt-Out', toggle: true, defaultToggled: true},
      { payload: '3', text: 'Voice Opt-Out', toggle: true, disabled: true}
    ];
    return (
      React.createElement("div", {className: "setting_tab"}, 
        React.createElement(Menu, {menuItems: mi, autoWidth: false, zDepth: 0})
      )
    );
  }
});