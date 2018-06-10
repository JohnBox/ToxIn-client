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
    return {openPanel: true, window: windowTypes.NONE, contact: null, audiences: null, rooms: null};
  },
  togglePanel() {
    this.setState({openPanel: !this.state.openPanel});
  },
  closeWindow() {
    // if (name === 'room') {
    //   this.setState({window: windowTypes.NONE, contact: null, r: r });
    // } else if (name === 'audience') {
    //   this.setState({window: windowTypes.NONE, contact: null, a: r});
    // }
    // } else {
    this.setState({window: windowTypes.NONE, contact: null, audiences: null, rooms: null});
  },
  openWindow(window, contact) {
    this.setState({window: window, contact: contact});
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
    const style = this.getStyles();
    return (
      <Paper className="main_page">
        <Panel
          style={style.panel}
          toggleTheme={this.props.toggleTheme}
          openWindow={this.openWindow}
          closeWindow={this.closeWindow}
          rooms={this.state.rooms}
          audiences={this.state.audiences}/>
        <Container
          style={style.container}
          window={this.state.window}
          contact={this.state.contact}
          closeWindow={this.closeWindow}
          togglePanel={this.togglePanel}/>
      </Paper>
    );
  }
});