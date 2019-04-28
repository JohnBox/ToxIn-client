const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link, Navigation } = Router;
const Cookie = require('js-cookie');
const $ = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, FontIcon } = mui;
const Transitions = mui.Styles.Transitions;
const OutButton = require('./../Button/OutButton');
const ToggleButton = require('./../Button/ToggleButton');
const Panel = require('./Panel');
const Container = require('./Container');
const ProfileWindow = require('../Window/ProfileWindow');
const UserWindow = require('../Window/UserWindow');
const MessageWindow = require('../Window/VideoWindow');
const windowTypes = require('../windows');


module.exports = React.createClass({
  mixins: [Navigation],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {openPanel: true, window: windowTypes.NONE, data: null};
  },
  togglePanel() {
    this.setState({openPanel: !this.state.openPanel});
  },
  closeWindow() {
    this.setState({window: windowTypes.NONE, data: null});
  },
  openWindow(window, data) {
    this.setState({window: window, data: data});
  },
  getStyles() {
    return {
      panel: {
        display: this.state.openPanel?'flex':'none',
      },
      container: {
        transition: Transitions.easeOut('10ms')
      }
    };
  },
  render() {
    const style = this.getStyles();
    return (
      <Paper className="main_page">
        <Panel
          style={style.panel}
          darkTheme={this.props.darkTheme}
          toggleTheme={this.props.toggleTheme}
          openWindow={this.openWindow}
          closeWindow={this.closeWindow}
          rooms={this.state.rooms}
          audiences={this.state.audiences}/>
        <Container
          style={style.container}
          window={this.state.window}
          data={this.state.data}
          closeWindow={this.closeWindow}
          togglePanel={this.togglePanel}/>
      </Paper>
    );
  }
});