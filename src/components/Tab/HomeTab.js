const React = require('react');
const $ = require('jquery');
const Cookie = require('js-cookie');
const ScrollBar = require('react-scrollbar');
const mui = require('material-ui');
const { Paper, TextField, Menu, SubheaderMenuItem, SvgIcon, FlatButton, List, ListDivider } = mui;
const StylePropable = mui.Mixins.StylePropable;
const Colors = mui.Styles.Colors;
const windowTypes = require('../windows');



module.exports = React.createClass({
  getDefaultProps() {
    return {url: 'http://127.0.0.1:8000/'};
  },
  getInitialState() {
    return {contacts: null, rooms: null, audiences: null};
  },
  getAllContacts() {
    const user = Cookie.getJSON('user');
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'contacts-list/',
        method: 'POST',
        data: {username: user.username},
        success: resolve,
        error: reject
      });
    });
  },
  onContactClick(e, i) {
    let contact = this.state.contacts[i];
    this.props.set(windowTypes.VIDEO, contact.id);
  },
  onRoomClick(e,i) {
    var r = this.state.rooms[i];
    this.props.set(windowTypes.VIDEO, 'r'+r.id);
  },
  onAudienceClick(e,i) {
    var a = this.state.audiences[i];
    this.props.set(windowTypes.VIDEO, 'a'+a.id);
  },
  createAudience() {
    this.props.set(windowTypes.AUDIENCE, this.state.contacts);
  },
  createRoom() {
    this.props.set(windowTypes.ROOM, this.state.contacts);
  },
  componentWillReceiveProps(next) {
    let oldRooms = this.state.rooms;
    let oldAudiences = this.state.audiences;
    let oldContacts = this.state.contacts;
    if (next.r) {
      oldRooms.push(next.r);
    }
    if (next.a) {
      oldAudiences.push(next.a);
    }
    if (next.contact) {
      oldContacts.push(next.contact)
    }
    this.setState({contacts: oldContacts, rooms: oldRooms, audiences: oldAudiences});
  },
  render() {
    let rooms = [], audiences = [], contacts = [];
    if (!this.state.contacts && !this.state.rooms && !this.state.audiences) {
      this.getAllContacts().then((res)=>{console.log(res.a);this.setState({
        contacts: res.a.contacts, rooms: res.a.rooms, audiences: res.a.audiences})});
    } else {
      rooms = this.state.rooms.map((r)=>({text: r.name}));
      if (rooms) {
        rooms = <Menu menuItems={rooms} onItemTap={this.onRoomClick} autoWidth={false} zDepth={0}/>;
      }
      audiences = this.state.audiences.map((a)=>({text: a.name}));
      if (audiences) {
        audiences = <Menu menuItems={audiences} onItemTap={this.onAudienceClick} autoWidth={false} zDepth={0}/>;
      }
      contacts = this.state.contacts.map((c) => ({text: c.first_name+' '+c.last_name}));
      if (contacts) {
        contacts = <Menu menuItems={contacts} onItemTap={this.onContactClick} autoWidth={false} zDepth={0}/>;
      }
    }
    return (
      <div className="home_tab">
        <ScrollBar>
          <FlatButton onClick={this.createAudience} style={{width: '50%'}} label={'Нова аудиторія'}/>
          <FlatButton onClick={this.createRoom} style={{float: 'right', width: '50%'}} label={'Нова кімната'}/>
          <List subheader='Контакти' subheaderStyle={{fontSize: '1.2em'}}>
            {contacts}
          </List>
          <ListDivider/>
          <List subheader='Аудиторії' subheaderStyle={{fontSize: '1.2em'}}>
            {audiences}
          </List>
          <ListDivider/>
          <List subheader='Кімнати' subheaderStyle={{fontSize: '1.2em'}}>
            {rooms}
          </List>
        </ScrollBar>
      </div>
    );
  }
});
