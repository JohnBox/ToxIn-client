var React = require('react');
var ScrollBar = require('react-scrollbar');
var $ = require('jquery');
var $__0=       require('material-ui'),Paper=$__0.Paper,TextField=$__0.TextField,Menu=$__0.Menu,SvgIcon=$__0.SvgIcon;

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
  getDefaultProps:function() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState:function() {
    return {users: null};
  },
  getAllUsers:function() {
    return new Promise(function(resolve, reject){
      $.ajax({
        url: this.props.url + 'getallusers/',
        method: 'POST',
        success: resolve,
        error: reject
      });
    }.bind(this));

  },
  render:function() {
    alert(this.state.users);
    var users;
    if (!this.state.users) {
      this.getAllUsers().then(function(data) {this.setState({users: data.a})}.bind(this), function(e) {alert(e)});
    } else {
      users = this.state.users.map(function(u){text: u});
    }
    return (
      React.createElement("div", {className: "search_tab"}, 
        React.createElement(TextField, {hintText: "Пошук", style: {width: '100%'}, search: true}), 
        React.createElement(ScrollBar, null, 
          React.createElement(Menu, {menuItems: users, onItemClick: this.Info, autoWidth: false, zDepth: 0})
        )
      )
    );
  }
});


