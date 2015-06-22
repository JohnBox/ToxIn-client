var React = require('react');
var ScrollBar = require('react-scrollbar');
var $ = require('jquery');
var Cookie = require('js-cookie');
var { Paper, TextField, Menu, SvgIcon, Snackbar } = require('material-ui');
var AddIcon = require('../Button/AddContactButton');

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
  onUserClick(e,i,p) {
    this.props.close();
    var contact = this.state.users[i];
    Cookie.set('contact', contact);
    this.props.set(2);
  },
  render() {
    var users = [];
    if (!this.state.users) {
      this.getAllUsers().then((data)=>{this.setState({users: data.a})});
    } else {
      users = this.state.users.map((u)=>({text: u.first_name+' '+u.last_name, icon: <Icon/>}));
    }
    return (
      <div className="search_tab">
        <TextField hintText='Пошук' style={{width: '100%'}} search={true}/>
        <ScrollBar>
          <Menu menuItems={users} onItemClick={this.onUserClick} autoWidth={false} zDepth={0}/>
        </ScrollBar>
      </div>
    );
  }
});