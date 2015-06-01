var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper } = mui;

module.exports = React.createClass({
  render: function () {
    return (
      <Paper className="left_panel" zDepth={4}>
        <h1>LeftNav</h1>
      </Paper>
    );
  }
});