var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var Cookie = require('js-cookie');
var $ = require('jquery');
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,FontIcon=$__1.FontIcon;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');
var Container = require('./Container');
var UserWindow = require('../Window/UserWindow');
var ContactWindow = require('../Window/ContactWindow');
var MessageWindow = require('../Window/MessageWindow');

var windowTypes = {
  NONE: 0,
  USER: 1,
  CONTACT: 2,
  MESSAGE: 3
};

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState:function() {
    return {openPanel: true, window: windowTypes.NONE};
  },
  togglePanel:function() {
    this.setState({openPanel: !this.state.openPanel});
  },
  closeWindow:function() {
    this.setState({window: null});
  },
  setWindow:function(w) {
    this.setState({window: w});
  },
  getStyles:function() {
    return {
      panel: {
        display: this.state.openPanel?'flex':'none',
      },
      container: {
        transition: Transitions.easeOut('0ms')
      }
    };
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement(Paper, {className: "main_page"}, 
        React.createElement(Panel, {style: style.panel, toggleTheme: this.props.toggleTheme, setWindow: this.setWindow}), 
        React.createElement(Container, {window: this.state.window, closeWindow: this.closeWindow, style: style.container, togglePanel: this.togglePanel})
      )
    );
  }
});