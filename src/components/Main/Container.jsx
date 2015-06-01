var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton } = mui;
var CoverButton = require('./CoverButton');


module.exports = React.createClass({
  render: function () {
    return (
      <Paper className='container' zDepth={0}>
        <RaisedButton onClick={this.props.togglePanel}/>
        <h1>Container</h1>
      </Paper>
    );
  }
});