var React = require('react');
var Router = require('react-router');
var { Navigation } = Router;
var mui = require('material-ui');
var { AppBar, Paper } = mui;
var About = require('./About');
var RightButton = require('./../Button/RightButton');
var RegisterForm = require('./RegisterForm');
var LoginForm = require('./LoginForm');

module.exports = React.createClass({
  mixins: [Navigation],
  getInitialState() {
    return {login: true};
  },
  toggleLogin() {
    this.setState({login: !this.state.login});
  },
  render() {
    var button, form, user = this.props.user();
    if (this.state.login) {
      button = <RightButton label={'Зареєструватися'} onClick={this.toggleLogin}/>;
      form = <LoginForm setUser={this.props.user}/>;
    } else {
      button = <RightButton label={'Війти'} onClick={this.toggleLogin}/>;
      form = <RegisterForm/>
    }
    if (user) {
      this.transitionTo('app');
    }
    return (
      <div className="start_page">
        <Paper className="paper">
          <AppBar title='ToxIn' iconElementLeft={<ToxInIcon/>} iconElementRight={button}/>
          {form}
          <About/>
        </Paper>
      </div>
    );
  }
});

var ToxInIcon = React.createClass({
  render() {
    var style = {width: '50px', height: '50px'};
    return (
      <img src="ti.png" alt="" style={style}/>
    );
  }
});
