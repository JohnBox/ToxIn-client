var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, Tabs, Tab } = mui;

module.exports = React.createClass({
  render() {
    return (
      <div className="panel_container">
        <h1>Search Tab</h1>
      </div>
    );
  }
});