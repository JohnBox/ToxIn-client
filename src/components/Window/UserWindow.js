var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
var StylePropable = mui.Mixins.StylePropable;
var CloseButton = require('../Button/CloseWindow');

module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://91.225.146.97:8000/'};
  },
  getInitialState() {
    return {edit: false, user: null};
  },
  edit() {
    this.setState({edit: !this.state.edit});
  },
  save() {
    var user = Cookie.getJSON('user');
    var username = user.username;
    if (user.first_name && user.last_name && user.email) {
      ajax({
        url: this.props.url + 'setuserprofile/',
        method: 'POST',
        data: {
          username: username,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          workplace: user.workplace,
          position: user.position
        }
      });
      this.edit();
    }
  },
  firstnameInput(e) {
    var user = this.state.user;
    user.first_name = e.target.value;
    this.setState({user: user});
  },
  lastnameInput(e) {
    var user = this.state.user;
    user.last_name = e.target.value;
    this.setState({user: user});
  },
  emailInput(e) {
    var user = this.state.user;
    user.email = e.target.value;
    this.setState({user: user});
  },
  workplaceInput(e) {
    var user = this.state.user;
    user.workplace = e.target.value;
    this.setState({user: user});
  },
  positionInput(e) {
    var user = this.state.user;
    user.position = e.target.value;
    this.setState({user: user});
  },
  getUserProfile() {
    var username = this.props.user.username;
    return new Promise((resolve, reject)=>{
      ajax({
        url: this.props.url + 'getuserprofile/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    });
  },
  render() {
    var user = Cookie.getJSON('user');
    var label, disabled, onClick;
    if (this.state.edit) {
      label = 'Зберегти';
      disabled = false;
      onClick = this.save;
    } else {
      label = 'Редагувати';
      disabled = true;
      onClick = this.edit;
    }

    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <div className="img">
          <img src="static/go.png" alt=""/>
          <RaisedButton style={{width: '100%'}} label={label} onClick={onClick}/>
        </div>
        <div className="info">
          <TextField disabled={disabled} value={user.first_name} onChange={this.firstnameInput} floatingLabelText="Ім`я"/>
          <TextField disabled={disabled} value={user.last_name} onChange={this.lastnameInput} floatingLabelText="Прізвище"/>
          <TextField disabled={disabled} value={user.email} onChange={this.emailInput} floatingLabelText="Електронна пошта"/>
          <TextField disabled={disabled} value={user.workplace} onChange={this.workplaceInput} floatingLabelText="Місце роботи"/>
          <TextField disabled={disabled} value={user.position} onChange={this.positionInput} floatingLabelText="Посада"/>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});
