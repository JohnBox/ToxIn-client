var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');
var Container = require('./Container');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {openPanel: true};
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
        transition: Transitions.easeOut('200ms')
      }
    };
  },
  render() {
    var style = this.getStyles();
    return (
      <Paper className="main_page">
        <Panel theme={this.props.theme} user={this.props.user} style={style.panel}/>
        <AppBar title=''
                iconElementLeft={<ToggleButton toggle={this.togglePanel}/>}
                iconElementRight={<OutButton user={this.props.user}/>}
                style={style.container}
                zDepth={0}/>
        <Container style={style.container}/>
      </Paper>
    );
  }
});