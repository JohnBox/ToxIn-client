const React = require('react');
const Cookie = require('js-cookie');
const { Route, RouteHandler, Link, Navigation } = require('react-router');
const { ajax } = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
const StylePropable = mui.Mixins.StylePropable;
const CloseButton = require('../Button/CloseWindow');

module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://192.168.31.128:8000/'};
  },
  getInitialState() {
    return {edit: false, user: Cookie.getJSON('user')};
  },
  edit() {
    this.setState({edit: !this.state.edit});
  },
  save() {
    let user = this.state.user;
    if (user.first_name && user.last_name && user.email) {
      ajax({
        url: this.props.url + 'user-edit/',
        method: 'POST',
        data: {
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          workplace: user.workplace,
          position: user.position
        }
      });
      this.edit();
      Cookie.set('user', user);
    }
  },
  firstNameInput(e) {
    const user = this.state.user;
    user.first_name = e.target.value;
    this.setState({user: user});
  },
  lastNameInput(e) {
    const user = this.state.user;
    user.last_name = e.target.value;
    this.setState({user: user});
  },
  emailInput(e) {
    const user = this.state.user;
    user.email = e.target.value;
    this.setState({user: user});
  },
  workplaceInput(e) {
    const user = this.state.user;
    user.workplace = e.target.value;
    this.setState({user: user});
  },
  positionInput(e) {
    const user = this.state.user;
    user.position = e.target.value;
    this.setState({user: user});
  },
  getUserProfile() {
    const username = this.props.user.username;
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
    const user = this.state.user;
    let label, disabled, onClick;
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
          <RaisedButton style={{width: '100%'}} label={label} onClick={onClick}/>
        </div>
        <div className="info">
          <TextField disabled={disabled} value={user.first_name} onChange={this.firstNameInput} floatingLabelText="Ім`я"/>
          <TextField disabled={disabled} value={user.last_name} onChange={this.lastNameInput} floatingLabelText="Прізвище"/>
          <TextField disabled={disabled} value={user.email} onChange={this.emailInput} floatingLabelText="Електронна пошта"/>
          <TextField disabled={disabled} value={user.workplace} onChange={this.workplaceInput} floatingLabelText="Місце роботи"/>
          <TextField disabled={disabled} value={user.position} onChange={this.positionInput} floatingLabelText="Посада"/>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});
