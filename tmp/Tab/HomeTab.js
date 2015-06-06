var React = require('react');
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
  getInitialState:function() {
    return {
      users: [
        {text: 'John Box', icon: React.createElement(Icon, null)},
        {text: 'Marty Style', icon: React.createElement(Icon, null)},
        {text: 'Tony Grisoni', icon: React.createElement(Icon, null)},
        {text: 'John Box', icon: React.createElement(Icon, null)},
        {text: 'Marty Style', icon: React.createElement(Icon, null)},
        {text: 'Tony Grisoni', icon: React.createElement(Icon, null)},
        {text: 'Marty Style', icon: React.createElement(Icon, null)},
        {text: 'Tony Grisoni', icon: React.createElement(Icon, null)},
        {text: 'John Box', icon: React.createElement(Icon, null)},
        {text: 'Marty Style', icon: React.createElement(Icon, null)},
        {text: 'Tony Grisoni', icon: React.createElement(Icon, null)},
        {text: 'Marty Style', icon: React.createElement(Icon, null)},
        {text: 'Tony Grisoni', icon: React.createElement(Icon, null)},
        {text: 'Leila Wong', icon: React.createElement(Icon, null)}
      ]
    };
  },
  render:function() {
    var users = this.state.users;
    return (
      React.createElement("div", {className: "search_tab"}, 

        React.createElement(ScrollBar, null, 
          React.createElement(Menu, {menuItems: users, autoWidth: false, zDepth: 0})
        )
      )
    );
  }
});