var React = require('react');
var $ = require('jquery');
var ScrollBar = require('react-scrollbar');
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
    return {contacts: null};
  },
  getAllContacts:function() {
    return new Promise(function(resolve, reject){
      $.ajax({
        url: this.props.url + 'getallcontacts/',
        method: 'POST',
        data: {user: 'gott'},
        success: resolve,
        error: reject
      });
    }.bind(this));
  },
  render:function() {

    var contacts = [];
    if (!this.state.contacts) {
      this.getAllContacts().then(function(data){this.setState({contacts: data.a})}.bind(this));
    } else {
      contacts = this.state.contacts.map(function(c){return {text: c, icon: React.createElement(Icon, null)};});
    }
    return (
      React.createElement("div", {className: "home_tab"}, 
        React.createElement(ScrollBar, null, 
          React.createElement(Menu, {menuItems: contacts, autoWidth: false, zDepth: 0})
        )
      )
    );
  }
});
