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
    return {edit: false, user: null};
  },
  edit:function() {
    this.setState({edit: !this.state.edit});
  },
  save:function() {
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
  firstnameInput:function(e) {
    var user = this.state.user;
    user.first_name = e.target.value;
    this.setState({user: user});
  },
  lastnameInput:function(e) {
    var user = this.state.user;
    user.last_name = e.target.value;
    this.setState({user: user});
  },
  emailInput:function(e) {
    var user = this.state.user;
    user.email = e.target.value;
    this.setState({user: user});
  },
  workplaceInput:function(e) {
    var user = this.state.user;
    user.workplace = e.target.value;
    this.setState({user: user});
  },
  positionInput:function(e) {
    var user = this.state.user;
    user.position = e.target.value;
    this.setState({user: user});
  },
  getUserProfile:function() {
    var username = this.props.user.username;
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
      React.createElement(Paper, {className: "window", zDepth: 1, rounded: false}, 
        React.createElement("div", {className: "img"}, 
          React.createElement("img", {src: "static/go.png", alt: ""}), 
          React.createElement(RaisedButton, {style: {width: '100%'}, label: label, onClick: onClick})
        ), 
        React.createElement("div", {className: "info"}, 
          React.createElement(TextField, {disabled: disabled, value: user.first_name, onChange: this.firstnameInput, floatingLabelText: "Ім`я"}), 
          React.createElement(TextField, {disabled: disabled, value: user.last_name, onChange: this.lastnameInput, floatingLabelText: "Прізвище"}), 
          React.createElement(TextField, {disabled: disabled, value: user.email, onChange: this.emailInput, floatingLabelText: "Електронна пошта"}), 
          React.createElement(TextField, {disabled: disabled, value: user.workplace, onChange: this.workplaceInput, floatingLabelText: "Місце роботи"}), 
          React.createElement(TextField, {disabled: disabled, value: user.position, onChange: this.positionInput, floatingLabelText: "Посада"})
        ), 
        React.createElement(CloseButton, {onClick: this.props.close})
      )
    );
  }
});
