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

module.exports = React.createClass({
  mixins: [Navigation],
  getInitialState() {
    return {openPanel: true};
  },
  togglePanel() {
    this.setState({openPanel: !this.state.openPanel});
  },
  componentWillMount() {
    this.props.user()
  },
  render() {
    //alert(window.location.href.split('/').reverse()[0]);
    var panel = this.state.openPanel?<Panel theme={this.props.theme} user={this.props.user}/>:'';
    return (
      <Paper className="main_page">
        {panel}
        <AppBar title=''
                iconElementLeft={<ToggleButton toggle={this.togglePanel}/>}
                iconElementRight={<OutButton user={this.props.user}/>}
                zDepth={0}/>
      </Paper>
    );
  }
});