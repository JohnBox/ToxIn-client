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
  addContact() {
    const user = Cookie.getJSON('user');
    const contact = this.props.contact;
    ajax({
      url: this.props.url + 'create-contact/',
      method: 'POST',
      data: {
        user: user.username,
        contact: contact.username
      }
    });
    this.props.close();
  },
  render() {
    const contact = this.props.contact;
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
        </div>
        <div className="img">
          <RaisedButton secondary={true} style={{width: '100%'}} label='Додати' onClick={this.addContact} />
        </div>
      </Paper>
    );
  }
});
