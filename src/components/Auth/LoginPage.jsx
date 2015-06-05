var React = require('react');
var Router = require('react-router');
var { RouteHandler, Navigation } = Router;
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton } = mui;
var About = require('./About');
var RightButton = require('./../Button/RightButton');
var LoginForm = require('./../Form/LoginForm');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  render: function () {
    var user = this.props.user();
    if (user){
      this.transitionTo('main', {user: user});
    }
    return (
      <div className="start_page">
        <Paper className="paper">
          <AppBar title='ToxIn' iconElementRight={<RightButton link={'register'} label={'Зареєструватися'}/>}/>
          <LoginForm setUser={this.props.user}/>
          <About/>
        </Paper>
      </div>
    );
  }
});


