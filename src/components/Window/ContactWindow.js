var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
var StylePropable = mui.Mixins.StylePropable;
var CloseButton = require('../Button/CloseWindow');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://91.225.146.97:8000/'};
  },
  addContact() {
    var user = Cookie.getJSON('user').username;
    var contact= this.props.contact.username;
    ajax({
      url: this.props.url + 'addcontacttouser/',
      method: 'POST',
      data: {
        user: user,
        contact: contact
      }
    });
    this.props.close();
  },
  render() {
    var contact = this.props.contact;
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <div className="img">
          <img src="static/go.png" alt=""/>
          <RaisedButton secondary={true} style={{width: '100%'}} label='Додати' onClick={this.addContact} />
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
