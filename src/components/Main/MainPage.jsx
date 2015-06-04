var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');

module.exports = React.createClass({
  getInitialState: function () {
    return {openPanel: true};
  },
  togglePanel: function () {
    this.setState({openPanel: !this.state.openPanel});
  },
  render: function () {
    var panel = this.state.openPanel?<Panel/>:'';
    return (
      <Paper className="main_page">
        {panel}
        <AppBar title=''
                iconElementLeft={<ToggleButton toggle={this.togglePanel}/>}
                iconElementRight={<OutButton/>}
                zDepth={0}/>
      </Paper>
    );
  }
});