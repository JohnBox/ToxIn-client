var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, Tabs, Tab } = mui;

module.exports = React.createClass({
  render() {
    return (
      <div className='home_tab'>
        Контакти
      </div>
    );
  }
});