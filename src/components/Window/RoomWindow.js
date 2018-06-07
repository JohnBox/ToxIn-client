var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu, List, ListItem, ListDivider } = mui;
var StylePropable = mui.Mixins.StylePropable;
var CloseButton = require('../Button/CloseWindow');
var windowTypes = require('../windows');


module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://127.0.0.1:8000/'};
  },
  getInitialState() {
    return {contacts: [], name: null};
  },
  create() {
    var that = this;
    var username = Cookie.getJSON('user').username;
    var contacts = this.state.contacts.join('/');
    var name = this.state.name;
    if (name&&contacts) {
        ajax({
          url: this.props.url + 'createroom/',
          method: 'POST',
          data: {
            username: username,
            name: name,
            contacts: contacts
          },
          success: function (d) {
            that.props.close(d.a, 'room');
          },
          error: function (e) {
            alert(e);
          }
        });
    }
  },
  onCheck(e,id) {
    var oldContacts = this.state.contacts;
    var newContacts;
    if (e.target.checked) {
      oldContacts.push(id);
      newContacts = oldContacts;
    } else {
      oldContacts.pop(id);
      newContacts = oldContacts;
    }
    this.setState({contacts: newContacts})
  },
  inputName(e) {
    this.setState({name: e.target.value});
  },
  render() {
    var contacts = this.props.contacts.map((c)=>{return <ListItem leftCheckbox={<CheckBox onChange={this.onCheck} id={c.id}/>}>{c.first_name+' '+c.last_name}</ListItem>});
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <CloseButton onClick={this.props.close}/>
        <div className="room_window">
          <List subheader='Нова кімната'>
            <TextField hintText='Назва' onChange={this.inputName}/>
              {contacts}
          </List>
          <RaisedButton onClick={this.create} label='Create'/>
        </div>
      </Paper>
    );
  }
});

var CheckBox = React.createClass({
  onChange(e) {
    this.props.onChange(e,this.props.id);
  },
  render() {
    return (
      <input type="checkbox" onChange={this.onChange}/>
    );
  }
});