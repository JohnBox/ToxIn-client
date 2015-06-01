var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, FlatButton } = mui;

module.exports = React.createClass({
  render: function () {
    return (
      <div className="main_page">
        <mui.Paper className="paper">
          <AppBar title='ToxIn'/>
        </mui.Paper>
        </div>
    );
  }
});