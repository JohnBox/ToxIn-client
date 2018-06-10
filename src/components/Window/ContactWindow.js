const React = require('react');
const Cookie = require('js-cookie');
const { Route, RouteHandler, Link, Navigation } = require('react-router');
const { ajax } = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
const StylePropable = mui.Mixins.StylePropable;
const CloseButton = require('../Button/CloseWindow');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://127.0.0.1:8000/'};
  },
  deleteContact() {
    const user = Cookie.getJSON('user');
    const contact = this.props.contact;
    ajax({
      url: this.props.url + 'delete-contact/',
      method: 'POST',
      data: {
        user: user.username,
        contact: contact.username
      }
    });
    this.props.closeWindow();
  },
  render() {
    const contact = this.props.contact;
    contact.date_joined = contact.date_joined.split('T')[0] + ' '
      + contact.date_joined.split('T')[1].split('.')[0];
    if (contact.last_login) {
      contact.last_login = contact.last_login.split('T')[0] + ' '
        + contact.last_login.split('T')[1].split('.')[0];
    }
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <CloseButton onClick={this.props.closeWindow}/>
        <div className="info">
          <TextField disabled={true} value={contact.first_name} floatingLabelText="Ім`я"/>
          <TextField disabled={true} value={contact.last_name} floatingLabelText="Прізвище"/>
          <TextField disabled={true} value={contact.username} floatingLabelText="Логін"/>
          <TextField disabled={true} value={contact.email} floatingLabelText="Електронна пошта"/>
          <TextField disabled={true} value={contact.workplace} floatingLabelText="Місце роботи"/>
          <TextField disabled={true} value={contact.position} floatingLabelText="Посада"/>
          <TextField disabled={true} value={contact.date_joined} floatingLabelText="Перше підключення"/>
          <TextField disabled={true} value={contact.last_login} floatingLabelText="Останне підключеня"/>
        </div>
        <div className="img">
          <RaisedButton secondary={true} style={{width: '100%'}} label='Видалити' onClick={this.deleteContact} />
        </div>
      </Paper>
    );
  }
});
