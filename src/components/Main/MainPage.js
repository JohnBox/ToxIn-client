var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var $ = require('jquery');
var mui = require('material-ui');
var $__1=      mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton;
var OutButton = require('./OutButton');
var LeftPanel = require('./Panel');
var Container = require('./Container');

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {openPanel: true};
  },
  togglePanel: function () {
    this.setState({openPanel: !this.state.openPanel});
  },
  render: function () {
    var panel = this.state.openPanel?React.createElement(LeftPanel, null):'';
    return (
      React.createElement(Paper, {className: "main_page"}, 
        panel, 
        React.createElement(Container, {togglePanel: this.togglePanel})
      )
    );
  }
});