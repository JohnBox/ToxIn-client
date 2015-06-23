var React = require('react');
var ScrollBar = require('react-scrollbar');
var $ = require('jquery');
var Cookie = require('js-cookie');
var { Paper, TextField, Menu, SvgIcon, Snackbar } = require('material-ui');
var AddIcon = require('../Button/AddContactButton');

var windowTypes = {
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
    return {url: 'http://91.225.146.97:8000/'};
  },
  getInitialState() {
    return {users: null};
  },
  getAllUsers() {
    var username = Cookie.getJSON('user').username;
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'getallusers/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    });
  },
  onUserClick(e,i) {
    var contact = this.state.users[i];
    this.props.set(windowTypes.CONTACT,contact);
  },
  onSearch(e) {
    var that = this;
    var username = Cookie.getJSON('user').username;
    $.ajax({
      url: this.props.url + 'searchusers/',
      method: 'POST',
      data: {
        username: username,
        q: e.target.value
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
    var users = [];
    if (!this.state.users) {
      this.getAllUsers().then((data)=>{this.setState({users: data.a})});
    } else {
      users = this.state.users.map((u)=>({text: u.first_name+' '+u.last_name}));
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