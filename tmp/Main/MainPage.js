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


module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState:function() {
    return {openPanel: true, window: null};
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
        transition: Transitions.easeOut('0ms')
      }
    };
  },
  userInfo:function() {
    this.setState({window: UserWindow });
  },
  contactInfo:function(e,i,p) {
    this.setState({window: ContactWindow });
  },
  closeWindow:function() {
    this.setState({window: null});
  },
  render:function() {
    var username = Cookie.getJSON('user')[0];
    if (!username) {
      this.transitionTo('login');
    }
    var style = this.getStyles();
    return (
      React.createElement(Paper, {className: "main_page"}, 
        React.createElement(Panel, {theme: this.props.theme, style: style.panel, userInfo: this.userInfo, contactInfo: this.contactInfo}), 
        React.createElement(AppBar, {title: "", iconElementLeft: React.createElement(ToggleButton, {toggle: this.togglePanel}), iconElementRight: React.createElement(OutButton, null), style: style.container, zDepth: 0}), 
        React.createElement(Container, {style: style.container, window: this.state.window, close: this.closeWindow})
      )
    );
  }
});