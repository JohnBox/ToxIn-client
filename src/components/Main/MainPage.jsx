var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper } = mui;
var OutButton = require('./OutButton');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="main_page">
        <Paper className="paper">
          <AppBar title='' iconElementRight={<OutButton label={'Вийти'}/>}/>
        </Paper>
        </div>
    );
  }
});