var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var Cookie = require('js-cookie');
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;
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

module.exports = React.createClass({
  mixins: [Navigation],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {openPanel: true, window: windowTypes.NONE};
  },
  togglePanel() {
    this.setState({openPanel: !this.state.openPanel});
  },
  closeWindow() {
    this.setState({window: null});
  },
  setWindow(w) {
    this.setState({window: w});
  },
  getStyles() {
    return {
      panel: {
        display: this.state.openPanel?'flex':'none',
      },
      container: {
        transition: Transitions.easeOut('0ms')
      }
    };
  },
  render() {
    var style = this.getStyles();
    return (
      <Paper className="main_page">
        <Panel style={style.panel} toggleTheme={this.props.toggleTheme} setWindow={this.setWindow} closeWindow={this.closeWindow}/>
        <Container window={this.state.window} closeWindow={this.closeWindow} style={style.container} togglePanel={this.togglePanel}/>
      </Paper>
    );
  }
});