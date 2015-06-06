var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;

module.exports = React.createClass({
  render() {
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <img src="static/go.png" alt=""/>
      </Paper>
    );
  }
});
