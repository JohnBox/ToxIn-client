var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton } = mui;
var OutButton = require('./OutButton');
var LeftPanel = require('./Panel');
var Container = require('./Container');

module.exports = React.createClass({
  getInitialState: function () {
    return {openPanel: true};
  },
  togglePanel: function () {
    this.setState({openPanel: !this.state.openPanel});
  },
  render: function () {
    var panel = this.state.openPanel?<LeftPanel/>:'';
    return (
      <Paper className="main_page">
        {panel}
        <Container togglePanel={this.togglePanel}/>
      </Paper>
    );
  }
});