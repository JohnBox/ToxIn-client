var React = require('react');
var $ = require('jquery');
var Cookie = require('js-cookie');
var ScrollBar = require('react-scrollbar');
var mui = require('material-ui');
var $__0=       mui,Paper=$__0.Paper,TextField=$__0.TextField,Menu=$__0.Menu,SvgIcon=$__0.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;


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

var NewContactIcon = React.createClass({displayName: "NewContactIcon",
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme:function() {
    return this.context.muiTheme.palette;
  },
  getStyles:function(){
    return {
      root: {
        float: 'right',
        opacity: '0.7',
        marginTop: '14px'
      },
      path: this.getTheme().textColor
    }
  },
  render:function() {
    var style = this.getStyles();
    return (
      React.createElement(SvgIcon, {style: style.root}, 
        React.createElement("path", {fill: style.path, d: "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"})
      )
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
    var username = Cookie.getJSON('user').username;
    return new Promise(function(resolve, reject){
      $.ajax({
        url: this.props.url + 'getallcontacts/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    }.bind(this));
  },
  onContactClick:function(e,i,p) {
    var contact = this.state.contacts[i];
    alert(contact.username);
    if (contact.new) {
      Cookie.set('contact', contact);
      this.props.contactProfile();
    } else {
      alert('Message');
    }
  },
  render:function() {
    var contacts = [];
    if (!this.state.contacts) {
      this.getAllContacts().then(function(data){this.setState({contacts: data.a})}.bind(this));
    } else {
      contacts = this.state.contacts.map(function(c){return {text: c.first_name+' '+c.last_name, icon: React.createElement(Icon, null), iconRight: c.new?React.createElement(NewContactIcon, null):null};});
    }
    return (
      React.createElement("div", {className: "home_tab"}, 
        React.createElement(ScrollBar, null, 
          React.createElement(Menu, {menuItems: contacts, onItemClick: this.onContactClick, autoWidth: false, zDepth: 0})
        )
      )
    );
  }
});
