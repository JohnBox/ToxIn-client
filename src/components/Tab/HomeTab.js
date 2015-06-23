var React = require('react');
var $ = require('jquery');
var Cookie = require('js-cookie');
var ScrollBar = require('react-scrollbar');
var mui = require('material-ui');
var { Paper, TextField, Menu, SubheaderMenuItem, SvgIcon, FlatButton, List, ListDivider} = mui;
var StylePropable = mui.Mixins.StylePropable;
var Colors = mui.Styles.Colors;
var windowTypes = require('../windows');



module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://91.225.146.97:8000/'};
  },
  getInitialState() {
    return {contacts: null, rooms: null, audiences: null};
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
  onContactClick(e,i) {
    var c = this.state.contacts[i];
    this.props.set(windowTypes.MESSAGE, 'c'+c.id);
  },
  onRoomClick(e,i) {
    var r = this.state.rooms[i];
    this.props.set(windowTypes.MESSAGE, 'r'+r.id);
  },
  onAudienceClick(e,i) {
    var a = this.state.audiences[i];
    this.props.set(windowTypes.MESSAGE, 'a'+a.id);
  },
  newAudience() {

  },
  newRoom() {
    this.props.set(windowTypes.ROOM, this.state.contacts);
  },
  render() {
    var contacts = [], rooms = [], audiences = [], c=r=a=null;
    if (!this.state.contacts&&!this.state.rooms&&!this.state.audiences) {
      this.getAllContacts().then((d)=>{this.setState({contacts: d.a.contacts, rooms: d.a.rooms, audiences: d.a.audiences})});
    } else {
      contacts = this.state.contacts.map((c)=>({text: c.first_name+' '+c.last_name+' | '+c.id}));
      rooms = this.state.rooms.map((r)=>({text: r.name +' | '+r.id}));
      audiences = this.state.audiences.map((a)=>({text: a.name+' | '+a.id}));
      if (contacts) {
        contacts = <Menu menuItems={contacts} onItemTap={this.onContactClick} autoWidth={false} zDepth={0}/>;
      }
      if (rooms) {
        rooms = <Menu menuItems={rooms} onItemTap={this.onRoomClick} autoWidth={false} zDepth={0}/>;
      }
      if (audiences) {
        audiences = <Menu menuItems={audiences} onItemTap={this.onAudienceClick} autoWidth={false} zDepth={0}/>;
      }
    }
    return (
      <div className="home_tab">
        <ScrollBar>
          <FlatButton onClick={this.newAudience} style={{width: '50%'}} label={'Нова аудиторія'}/>
          <FlatButton onClick={this.newRoom} style={{float: 'right', width: '50%'}} label={'Нова кімната'}/>
          <List subheader='Контакти' subheaderStyle={{fontSize: '1.2em'}}>
            {contacts}
          </List>
          <List subheader='Аудиторії' subheaderStyle={{fontSize: '1.2em'}}>
            {audiences}
          </List>
          <List subheader='Кімнати' subheaderStyle={{fontSize: '1.2em'}}>
            {rooms}
          </List>
        </ScrollBar>
      </div>
    );
  }
});
