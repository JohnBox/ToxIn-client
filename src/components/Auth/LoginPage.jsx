var React = require('react');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton } = mui;
var About = require('./About');
var RightButton = require('./../Button/RightButton');
var LoginForm = require('./../Form/LoginForm');
var RegisterForm = require('./../Form/RegisterForm');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {login: true};
  },
  toggleLogin() {
    this.setState({login: !this.state.login});
  },
  render: function () {
    var button, form;
    if (this.state.login) {
      button = <RightButton label={'Зареєструватися'} onClick={this.toggleLogin}/>;
      form = <LoginForm user={this.props.user}/>;
    } else {
      button = <RightButton label={'Зареєструватися'} onClick={this.toggleLogin}/>;
      form = <RegisterForm user={this.props.user}/>;
    }
    return (
      <div className="start_page">
        <Paper className="paper">
          <AppBar title='ToxIn' iconElementRight={button}/>
          {form}
          <About/>
        </Paper>
      </div>
    );
  }
});


