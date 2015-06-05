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

module.exports = React.createClass({displayName: "exports",
  mixins: [Navigation],
  getInitialState:function() {
    return {openPanel: true};
  },
  togglePanel:function() {
    this.setState({openPanel: !this.state.openPanel});
  },
  componentWillMount:function() {
    this.props.user()
  },
  render:function() {
    //alert(window.location.href.split('/').reverse()[0]);
    var panel = this.state.openPanel?React.createElement(Panel, {theme: this.props.theme, user: this.props.user}):'';
    return (
      React.createElement(Paper, {className: "main_page"}, 
        panel, 
        React.createElement(AppBar, {title: "", 
                iconElementLeft: React.createElement(ToggleButton, {toggle: this.togglePanel}), 
                iconElementRight: React.createElement(OutButton, {user: this.props.user}), 
                zDepth: 0})
      )
    );
  }
});