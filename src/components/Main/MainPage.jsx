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


module.exports = React.createClass({
  mixins: [Navigation],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {openPanel: true, window: null};
  },
  togglePanel() {
    this.setState({openPanel: !this.state.openPanel});
  },
  getStyles() {
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
  userProfile() {
    this.setState({window: UserWindow });
  },
  contactProfile(contact) {
    Cookie.set('contact', contact);
    this.setState({window: ContactWindow });
  },
  closeWindow() {
    Cookie.remove('contact');
    this.setState({window: null});
  },
  render() {
    var user = Cookie.getJSON('user');
    if (user === undefined) {
      this.transitionTo('login');
    }
    var style = this.getStyles();
    return (
      <Paper className="main_page">
        <Panel theme={this.props.theme} style={style.panel} userInfo={this.userProfile} contactInfo={this.contactProfile}/>
        <AppBar title='' iconElementLeft={<ToggleButton toggle={this.togglePanel}/>} iconElementRight={<OutButton/>} style={style.container} zDepth={0}/>
        <Container style={style.container} window={this.state.window} close={this.closeWindow}/>
      </Paper>
    );
  }
});