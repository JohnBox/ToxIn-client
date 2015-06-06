var React = require('react');
var Router = require('react-router');
var $__0=       Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var $ = require('jquery');
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,RaisedButton=$__1.RaisedButton,FontIcon=$__1.FontIcon;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');
var Container = require('./Container');

module.exports = React.createClass({displayName: "exports",
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState:function() {
    return {openPanel: true};
  },
  togglePanel:function() {
    this.setState({openPanel: !this.state.openPanel});
  },
  getStyles:function() {
    return {
      panel: {
        display: this.state.openPanel?'flex':'none',
      },
      container: {
        width: this.state.openPanel?'72%':'100%',
        transition: Transitions.easeOut('200ms')
      }
    };
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement(Paper, {className: "main_page"}, 
        React.createElement(Panel, {theme: this.props.theme, user: this.props.user, style: style.panel}), 
        React.createElement(AppBar, {title: "", 
                iconElementLeft: React.createElement(ToggleButton, {toggle: this.togglePanel}), 
                iconElementRight: React.createElement(OutButton, {user: this.props.user}), 
                style: style.container, 
                zDepth: 0}), 
        React.createElement(Container, {style: style.container})
      )
    );
  }
});