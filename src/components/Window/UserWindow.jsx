var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
var StylePropable = mui.Mixins.StylePropable;


var CloseButton = React.createClass({
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      userSelect: 'none',
      color: this.getTheme().textColor
    };
  },
  render() {
    var style = this.getStyles();
    return (
      <div className="close_button" onClick={this.props.onClick}>
        <SvgIcon style={style}>
          <path fill={style.color} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </SvgIcon>
      </div>
    );
  }
});

module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {edit: false, userProfile: null};
  },
  edit() {
    this.setState({edit: !this.state.edit});
  },
  save() {
    var username = Cookie.getJSON('user').username;
    var userProfile = this.state.userProfile;
    if (userProfile.first_name && userProfile.last_name && userProfile.email) {
      ajax({
        url: this.props.url + 'setuserprofile/',
        method: 'POST',
        data: {
          username: username,
          first_name: userProfile.first_name,
          last_name: userProfile.last_name,
          email: userProfile.email,
          workplace: userProfile.workplace,
          position: userProfile.position
        }
      });
      this.edit();
    }
  },
  firstnameInput(e) {
    var userProfile = this.state.userProfile;
    userProfile.first_name = e.target.value;
    this.setState({userProfile: userProfile});
  },
  lastnameInput(e) {
    var userProfile = this.state.userProfile;
    userProfile.last_name = e.target.value;
    this.setState({userProfile: userProfile});
  },
  emailInput(e) {
    var userProfile = this.state.userProfile;
    userProfile.email = e.target.value;
    this.setState({userProfile: userProfile});
  },
  workplaceInput(e) {
    var userProfile = this.state.userProfile;
    userProfile.workplace = e.target.value;
    this.setState({userProfile: userProfile});
  },
  positionInput(e) {
    var userProfile = this.state.userProfile;
    userProfile.position = e.target.value;
    this.setState({userProfile: userProfile});
  },
  getUserProfile() {
    var username = Cookie.getJSON('user').username;
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
    var userProfile;
    if (!this.state.userProfile) {
      this.getUserProfile().then((data)=>{this.setState({userProfile: data.a})});
      userProfile = Cookie.getJSON('user');
      userProfile.email = '';
      userProfile.workplace = '';
      userProfile.position = '';
    } else {
      userProfile = this.state.userProfile;
    }
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
          <TextField disabled={disabled} value={userProfile.first_name} onChange={this.firstnameInput} floatingLabelText="Ім`я"/>
          <TextField disabled={disabled} value={userProfile.last_name} onChange={this.lastnameInput} floatingLabelText="Прізвище"/>
          <TextField disabled={disabled} value={userProfile.email} onChange={this.emailInput} floatingLabelText="Електронна пошта"/>
          <TextField disabled={disabled} value={userProfile.workplace} onChange={this.workplaceInput} floatingLabelText="Місце роботи"/>
          <TextField disabled={disabled} value={userProfile.position} onChange={this.positionInput} floatingLabelText="Посада"/>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});
