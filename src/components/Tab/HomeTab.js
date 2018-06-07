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
    return {contacts: null};
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
    this.props.set(windowTypes.CONTACT, 'c'+contact.id);
  },
  onRoomClick(e,i) {
    var r = this.state.rooms[i];
    this.props.set(windowTypes.VIDEO, 'r'+r.id);
  },
  onAudienceClick(e,i) {
    var a = this.state.audiences[i];
    this.props.set(windowTypes.VIDEO, 'a'+a.id);
  },
  newAudience() {
    this.props.set(windowTypes.AUDIENCE, this.state.contacts);
  },
  newRoom() {
    this.props.set(windowTypes.ROOM, this.state.contacts);
  },
  componentWillReceiveProps(next) {
    var oldRooms = this.state.rooms;
    var oldAudiences = this.state.audiences;
    if (next.r&&this.state.rooms.indexOf(next.r)===-1) {
      alert('next r ' + next.r.id);
      oldRooms.push(next.r);
    }
    if (next.a) {
      alert('next a '+next.a.id);
      oldAudiences.push(next.a);
    }
    if (next.contact&&this.state) {

    }
    this.setState({rooms: oldRooms, audiences: oldAudiences});
  },
  render() {
    var rooms = [], audiences = [], contacts = [];
    if (!this.state.contacts) {
      this.getAllContacts().then((d)=>{this.setState({contacts: d.a})});
    } else {
      // rooms = this.state.rooms.map((r)=>({text: r.name +' | '+r.id}));
      // audiences = this.state.audiences.map((a)=>({text: a.name+' | '+a.id}));
      // if (rooms) {
      //   rooms = <Menu menuItems={rooms} onItemTap={this.onRoomClick} autoWidth={false} zDepth={0}/>;
      // }
      // if (audiences) {
      //   audiences = <Menu menuItems={audiences} onItemTap={this.onAudienceClick} autoWidth={false} zDepth={0}/>;
      // }
        contacts = this.state.contacts.map((c) => ({text: c.first_name+' '+c.last_name}))
        if (contacts) {
              contacts = <Menu menuItems={contacts} onItemTap={this.onContactClick} autoWidth={false} zDepth={0}/>;
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
