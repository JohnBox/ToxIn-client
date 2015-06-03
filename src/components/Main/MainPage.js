var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var $ = require('jquery');
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,FontIcon=$__1.FontIcon;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {openPanel: true};
  },
  togglePanel: function () {
    this.setState({openPanel: !this.state.openPanel});
  },
  render: function () {
    var panel = this.state.openPanel?React.createElement(Panel, null):'';
    return (
      React.createElement(Paper, {className: "main_page"}, 
        panel, 
        React.createElement(AppBar, {title: "ToxIn", 
                iconElementLeft: React.createElement(ToggleButton, {toggle: this.togglePanel}), 
                iconElementRight: React.createElement(FontIcon, {className: "muidocs-icon-action-home"}), 
                zDepth: 0})
      )
    );
  }
});