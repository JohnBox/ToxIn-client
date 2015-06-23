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
  getInitialState() {
    return {webrtc: null};
  },
  create() {
    var username = Cookie.getJSON('user').username;
    var contacts = document.getElementById('cont').value.split('/');
    var name = document.getElementById('name').value;
    ajax({
      url: this.props.url + 'createroom/',
      method: 'POST',
      data: {
        username: username,
        name: name,
        contacts: contacts
      }
    });
  },
  render() {
    var contacts = this.props.contacts.map((c)=>{return <li>{c.first_name+' '+c.last_name}</li>});
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <div className="room_window">
        <h1>Room</h1>
          <input type="text" id='name'/>
          <input type="text" id='cont'/>
          <RaisedButton onClick={this.create} label='Create'/>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});