var React = require('react');
var $ = require('jquery');
var Cookie = require('js-cookie');
var ScrollBar = require('react-scrollbar');
var mui = require('material-ui');
var { Paper, TextField, Menu, SubheaderMenuItem, SvgIcon, List, ListItem, ListDivider, IconButton, ToggleStarBorder, Avatar, } = mui;
var StylePropable = mui.Mixins.StylePropable;
var Colors = mui.Styles.Colors;

var Icon = React.createClass({
  getStyles() {
    return {
      marginTop: '5px',
      marginBottom: '-15px',
      marginRight: '10px',
      border: 'solid 1px gray',
      height: '40px',
      width: '40px',
      borderRadius: '50%'
    }
  },
  render() {
    var style = this.getStyles();
    return (
      <img src="static/go.png" alt="" style={style}/>
    );
  }
});

module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {contacts: null};
  },
  getAllContacts() {
    var username = Cookie.getJSON('user').username;
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'getallcontacts/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    });
  },
  onContactClick(e,i,p) {
    //var contact = this.state.contacts[i];
    //Cookie.set('contact', contact);
    alert('asdasd');
    //this.props.set(3,i);
  },
  render() {
    var contacts = [];
    if (!this.state.contacts) {
      this.getAllContacts().then((data)=>{this.setState({contacts: data.a})});
    } else {
      contacts = this.state.contacts.map((c)=> {
        return (<ListItem
          leftAvatar={<Avatar src='static/go.png'/>}
          onClick={this.onContactClick}
          rightIconButton={<Avatar src='static/go.png'/>}>{c.first_name} {c.last_name}</ListItem>);
      });
    }
    return (
      <div className="home_tab">
        <ScrollBar>
          <List subheader="Аудиторії сука">
            <ListItem leftAvatar={<Avatar src='static/go.png'/>}>Додати</ListItem>
          </List>
          <List subheader="Кімнати">
          </List>
          <List subheader="Контакти">
            {contacts}
          </List>
        </ScrollBar>
      </div>
    );
  }
});
