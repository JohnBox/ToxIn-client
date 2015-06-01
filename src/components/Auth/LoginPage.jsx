var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var mui = require('material-ui');
var { AppBar, Paper } = mui;
var About = require('./About');
var RightButton = require('./RightButton');
var LoginForm = require('./LoginForm');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState: function () {
    return {theme: false};
  },
  render: function () {
    return (
      <div className="start_page">
        <Paper className="paper">
          <AppBar title='ToxIn' iconElementRight={<RightButton link={'register'} label={'Зареєструватися'}/>}/>
          <LoginForm/>
          <About/>
        </Paper>
      </div>
    );
  }
});


