const React = require('react');
const ScrollBar = require('react-scrollbar');
const $ = require('jquery');
const Cookie = require('js-cookie');
const { Paper, TextField, Menu, SvgIcon, Snackbar } = require('material-ui');
const AddIcon = require('../Button/AddContactButton');

const windowTypes = {
  NONE: 0,
  USER: 1,
  CONTACT: 2,
  MESSAGE: 3
};

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {url: 'http://192.168.31.128:8000/'};
  },
  getInitialState() {
    return {users: null};
  },
  getUsersList() {
    let username = Cookie.getJSON('user').username;
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'users-list/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    });
  },
  onUserClick(e, i) {
    let contact = this.state.users[i];
    this.props.set(windowTypes.CONTACT, contact);
  },
  onSearch(e) {
    const that = this;
    const username = Cookie.getJSON('user').username;
    $.ajax({
      url: this.props.url + 'users-list/',
      method: 'POST',
      data: {
        username: username,
        search: e.target.value
      },
      success: function (data) {
        that.setState({users: data.a})
      },
      error: function (e) {
        alert(e.message());
      }
    });
  },
  render() {
    let users = [];
    if (!this.state.users) {
      this.getUsersList().then((data)=>{this.setState({users: data.a})});
    } else {
      users = this.state.users.map((user)=>({text: user.first_name+' '+user.last_name}));
    }
    return (
      <div className="search_tab">
        <TextField hintText='Пошук' style={{width: '100%'}} onChange={this.onSearch} search={true}/>
        <ScrollBar>
          <Menu menuItems={users} onItemTap={this.onUserClick} autoWidth={false} zDepth={0}/>
        </ScrollBar>
      </div>
    );
  }
});