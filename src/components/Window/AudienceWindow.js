const React = require('react');
const Cookie = require('js-cookie');
const { Route, RouteHandler, Link, Navigation } = require('react-router');
const { ajax } = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu, List, ListItem, ListDivider } = mui;
const StylePropable = mui.Mixins.StylePropable;
const CloseButton = require('../Button/CloseWindow');
const GHB = require('../Button/GitHubButton');

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://93.73.179.185:8000/'};
  },
  getInitialState() {
    return {contacts: [], name: null};
  },
  create() {
    const username = Cookie.getJSON('user').username;
    const contacts = this.state.contacts;
    const name = this.state.name;
    if (name&&contacts) {
      ajax({
        url: this.props.url + 'create-group/',
        method: 'POST',
        data: {
          username: username,
          name: name,
          contacts: contacts,
          root: true,
        }
      });
    }
  },
  onCheck(e,id) {
    let oldContacts = this.state.contacts;
    let newContacts;
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
    const contacts = this.props.contacts.map((c)=>{return <ListItem leftCheckbox={<CheckBox onChange={this.onCheck} id={c.id}/>}>{c.first_name+' '+c.last_name}</ListItem>});
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <CloseButton onClick={this.props.closeWindow}/>
        <div className="room_window">
          <List subheader='Нова Аудиторія'>
            <TextField hintText='Назва' onChange={this.inputName}/>
              {contacts}
          </List>
          <RaisedButton onClick={this.create} label='Create'/>
        </div>
      </Paper>
    );
  }
});

const CheckBox = React.createClass({
  onChange(e) {
    this.props.onChange(e,this.props.id);
  },
  render() {
    return (
      <input type="checkbox" onChange={this.onChange}/>
    );
  }
});