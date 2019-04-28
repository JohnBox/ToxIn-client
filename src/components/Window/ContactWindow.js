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
  getInitialState() {
    return {contact: this.props.contact}
  },
  getDefaultProps() {
    return {url: 'http://93.73.179.185:8000/'};
  },
  deleteContact() {
    const user = Cookie.getJSON('user');
    const contact = this.state.contact;
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
  componentWillReceiveProps(next) {
    if (next.contact !== this.state.contact) {
      this.setState({contact: next.contact});
    }
  },
  render() {
    const contact = this.props.contact;
    let date_joined = '', last_login = '';
    if (contact.date_joined) {
      date_joined = contact.date_joined.split('T')[0] + ' '
        + contact.date_joined.split('T')[1].split('.')[0];
    }
    if (contact.last_login) {
      last_login = contact.last_login.split('T')[0] + ' '
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
          <TextField disabled={true} value={date_joined} floatingLabelText="Перше підключення"/>
          <TextField disabled={true} value={last_login} floatingLabelText="Останне підключеня"/>
        </div>
        <div className="img">
          <RaisedButton secondary={true} style={{width: '100%'}} label='Видалити' onClick={this.deleteContact} />
        </div>
      </Paper>
    );
  }
});
