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
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {contact: null};
  },
  getContactProfile() {
    var username = Cookie.getJSON('contact').username;
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
  addContact() {
    var user = Cookie.getJSON('user').username;
    var contact = Cookie.getJSON('contact').username;
    ajax({
      url: this.props.url + 'addcontacttouser/',
      method: 'POST',
      data: {
        user: user,
        contact: contact
      }
    });
    Cookie.remove('contact');
    Cookie.remove('join');
    this.props.close();
  },
  render() {
    var contact;
    if (!this.state.contact) {
      this.getContactProfile().then((data)=>{this.setState({contact: data.a})});
      contact = Cookie.getJSON('contact');
      contact.email = '';
      contact.workplace = '';
      contact.position = '';
    } else {
      contact = this.state.contact;
    }
    var join = Cookie.getJSON('join'), button;
    if (join === undefined) {
      button = null;
    } else {
      button = <RaisedButton primary={true} style={{width: '100%'}} label='Відмінити' onClick={this.abortContact} />;
    }
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <div className="img">
          <img src="static/go.png" alt=""/>
          <RaisedButton secondary={true} style={{width: '100%'}} label='Додати' onClick={this.addContact} />
          <br/>
          {button}
        </div>
        <div className="info">
          <TextField disabled={true} value={contact.first_name} floatingLabelText="Ім`я"/>
          <TextField disabled={true} value={contact.last_name} floatingLabelText="Прізвище"/>
          <TextField disabled={true} value={contact.email} floatingLabelText="Електронна пошта"/>
          <TextField disabled={true} value={contact.workplace} floatingLabelText="Місце роботи"/>
          <TextField disabled={true} value={contact.position} floatingLabelText="Посада"/>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});
