var React = require('react');
var ScrollBar = require('react-scrollbar');
var $ = require('jquery');
var $__0=        require('material-ui'),Paper=$__0.Paper,TextField=$__0.TextField,Menu=$__0.Menu,SvgIcon=$__0.SvgIcon,Snackbar=$__0.Snackbar;
var AddIcon = require('../Button/AddContactButton');

var Icon = React.createClass({displayName: "Icon",
  getStyles:function() {
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
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement("img", {src: "static/go.png", alt: "", style: style})
    );
  }
});

module.exports = React.createClass({displayName: "exports",
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {users: null};
  },
  getAllUsers:function() {
    var user = this.context.router.getCurrentParams().user;
    return new Promise(function(resolve, reject){
      $.ajax({
        url: this.props.url + 'getallusers/',
        method: 'POST',
        data: {user: user},
        success: resolve,
        error: reject
      });
    }.bind(this));

  },
  contactInfo:function(e,i,p) {
    alert(i);
    alert(this.state.users[i][1]);
    this.props.contactInfo(e,i,p);
  },
  render:function() {
    var users = [];
    if (!this.state.users) {
      this.getAllUsers().then(function(data){this.setState({users: data.a})}.bind(this));
    } else {
      users = this.state.users.map(function(u){return {text: u[1], icon: React.createElement(Icon, null)};});
    }
    return (
      React.createElement("div", {className: "search_tab"}, 
        React.createElement(TextField, {hintText: "Пошук", style: {width: '100%'}, search: true}), 
        React.createElement(ScrollBar, null, 
          React.createElement(Menu, {menuItems: users, menuItemClassName: "menu_item", onItemClick: this.contactInfo, autoWidth: false, zDepth: 0})
        )
      )
    );
  }
});