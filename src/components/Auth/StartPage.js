const React = require('react');
const Cookie = require('js-cookie');
const { Navigation } = require('react-router');
const { AppBar, Paper } = require('material-ui');
const About = require('./About');
const RightButton = require('./../Button/RightButton');
const RegisterForm = require('./RegisterForm');
const LoginForm = require('./LoginForm');

module.exports = React.createClass({
  mixins: [Navigation],
  getInitialState() {
    return {login: true};
  },
  toggleLogin() {
    this.setState({login: !this.state.login});
  },
  render() {
    const user = Cookie.getJSON('user');
    if (user !== undefined) {
      this.transitionTo('main', {username: user.username});
    }
    let button, form;
    if (this.state.login) {
      button = <RightButton label={'Зареєструватися'} onClick={this.toggleLogin}/>;
      form = <LoginForm goTo={this.transitionTo}/>;
    } else {
      button = <RightButton label={'Війти'} onClick={this.toggleLogin}/>;
      form = <RegisterForm toggleLogin={this.toggleLogin}/>
    }
    return (
      <div className="start_page">
        <Paper className="paper">
          <AppBar title='Mycelium' iconElementLeft={<MyceliumIcon/>} iconElementRight={button}/>
          {form}
          <About/>
        </Paper>
      </div>
    );
  }
});

const MyceliumIcon = React.createClass({
  render() {
    const style = {width: '50px', height: '50px'};
    return (
      <img src="static/mi.png" alt="" style={style}/>
    );
  }
});
