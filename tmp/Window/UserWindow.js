var React = require('react');
var Cookie = require('js-cookie');
var $__0=       require('react-router'),Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link,Navigation=$__0.Navigation;
var $__1=    require('jquery'),ajax=$__1.ajax;
var mui = require('material-ui');
var $__2=         mui,AppBar=$__2.AppBar,Paper=$__2.Paper,RaisedButton=$__2.RaisedButton,SvgIcon=$__2.SvgIcon,TextField=$__2.TextField,DropDownMenu=$__2.DropDownMenu;
var StylePropable = mui.Mixins.StylePropable;


var CloseButton = React.createClass({displayName: "CloseButton",
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme:function() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      userSelect: 'none',
      color: this.getTheme().textColor
    };
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement("div", {className: "close_button", onClick: this.props.onClick}, 
        React.createElement(SvgIcon, {style: style}, 
          React.createElement("path", {fill: style.color, d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})
        )
      )
    );
  }
});

module.exports = React.createClass({displayName: "exports",
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {edit: false, userProfile: null};
  },
  edit:function() {
    this.setState({edit: !this.state.edit});
  },
  save:function() {
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
  firstnameInput:function(e) {
    var userProfile = this.state.userProfile;
    userProfile.first_name = e.target.value;
    this.setState({userProfile: userProfile});
  },
  lastnameInput:function(e) {
    var userProfile = this.state.userProfile;
    userProfile.last_name = e.target.value;
    this.setState({userProfile: userProfile});
  },
  emailInput:function(e) {
    var userProfile = this.state.userProfile;
    userProfile.email = e.target.value;
    this.setState({userProfile: userProfile});
  },
  workplaceInput:function(e) {
    var userProfile = this.state.userProfile;
    userProfile.workplace = e.target.value;
    this.setState({userProfile: userProfile});
  },
  positionInput:function(e) {
    var userProfile = this.state.userProfile;
    userProfile.position = e.target.value;
    this.setState({userProfile: userProfile});
  },
  getUserProfile:function() {
    var username = Cookie.getJSON('user').username;
    return new Promise(function(resolve, reject){
      ajax({
        url: this.props.url + 'getuserprofile/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    }.bind(this));
  },
  render:function() {
    var userProfile;
    if (!this.state.userProfile) {
      this.getUserProfile().then(function(data){this.setState({userProfile: data.a})}.bind(this));
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
      React.createElement(Paper, {className: "window", zDepth: 1, rounded: false}, 
        React.createElement("div", {className: "img"}, 
          React.createElement("img", {src: "static/go.png", alt: ""}), 
          React.createElement(RaisedButton, {style: {width: '100%'}, label: label, onClick: onClick})
        ), 
        React.createElement("div", {className: "info"}, 
          React.createElement(TextField, {disabled: disabled, value: userProfile.first_name, onChange: this.firstnameInput, floatingLabelText: "Ім`я"}), 
          React.createElement(TextField, {disabled: disabled, value: userProfile.last_name, onChange: this.lastnameInput, floatingLabelText: "Прізвище"}), 
          React.createElement(TextField, {disabled: disabled, value: userProfile.email, onChange: this.emailInput, floatingLabelText: "Електронна пошта"}), 
          React.createElement(TextField, {disabled: disabled, value: userProfile.workplace, onChange: this.workplaceInput, floatingLabelText: "Місце роботи"}), 
          React.createElement(TextField, {disabled: disabled, value: userProfile.position, onChange: this.positionInput, floatingLabelText: "Посада"})
        ), 
        React.createElement(CloseButton, {onClick: this.props.close})
      )
    );
  }
});
