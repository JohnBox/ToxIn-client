var React = require('react');
var Router = require('react-router');
var { RouteHandler, Navigation } = Router;
var mui = require('material-ui');
var { AppBar, Paper } = mui;
var About = require('./About');
var RightButton = require('./RightButton');
var RegisterForm = require('./RegisterForm');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState: function () {
    return {};
  },
  render: function () {
    var user = this.props.setUser();
    if (user.logined){
      this.transitionTo('main', {user: user.user});
    }
    return (
      <div className="register_page">
        <Paper className="paper">
          <AppBar title='ToxIn' iconElementRight={<RightButton link={'login'} label={'Війти'}/>}/>
          <RegisterForm/>
          <About/>
        </Paper>
      </div>
    );
  }
});

