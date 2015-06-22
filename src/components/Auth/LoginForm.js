var React = require('react');
var Router = require('react-router');
var Cookie = require('js-cookie');
var { Navigation } = Router;
var { ajax } = require('jquery');
var mui = require('material-ui');
var { RaisedButton, TextField } = mui;
var routes = require('../routes');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://91.225.146.97:8000/'};
  },
  getInitialState() {
    return {username: '', passwd: ''};
  },
  onSubmit(e) {
    var that = this;
    e.preventDefault();
    ajax({
      url: this.props.url + 'login/',
      type: 'POST',
      data: {
        username: this.state.username,
        passwd: this.state.passwd
      },
      success: function (data) {
        if (!data.e) {
          var user = data.a;
          Cookie.set('user', user);
          that.transitionTo('main', {username: user.username});
        } else {
          alert(data.e);
        }
      },
      error: function (e) {
        alert(e.responseText);
      }
    });
  },
  usernameInput(e) {
    this.setState({username: e.target.value});
  },
  passwordInput(e) {
    this.setState({passwd: e.target.value});
  },
  render() {
    return (
      <div className="start_form">
        <form onSubmit={this.onSubmit}>
          <TextField hintText={'Логін'} onChange={this.usernameInput}/><br/>
          <TextField type="password" hintText={'Пароль'} onChange={this.passwordInput}/><br/><br/>
          <RaisedButton label="Війти" style={{width: '100%'}}/>
        </form>
      </div>
    );
  }
});
