var React = require('react');
var $ = require('jquery');
var mui = require('material-ui');
var $__0=       mui,AppBar=$__0.AppBar,Paper=$__0.Paper,RaisedButton=$__0.RaisedButton,FontIcon=$__0.FontIcon;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');

module.exports = React.createClass({displayName: "exports",
  getInitialState:function() {
    return {openPanel: true};
  },
  togglePanel:function() {
    this.setState({openPanel: !this.state.openPanel});
  },
  componentWillMount:function() {
    this.props.user(window.location.href.split('/').reverse()[0]);
  },
  render:function() {
    var panel = this.state.openPanel?React.createElement(Panel, {theme: this.props.theme, user: this.props.user}):'';
    return (
      React.createElement(Paper, {className: "main_page"}, 
        panel, 
        React.createElement(AppBar, {title: "", 
                iconElementLeft: React.createElement(ToggleButton, {toggle: this.togglePanel}), 
                iconElementRight: React.createElement(OutButton, {user: this.props.user()}), 
                zDepth: 0})
      )
    );
  }
});