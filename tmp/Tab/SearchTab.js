var React = require('react');
var $__0=      require('material-ui'),Paper=$__0.Paper,TextField=$__0.TextField,Menu=$__0.Menu;


module.exports = React.createClass({displayName: "exports",
  getInitialState:function() {
    return {
      users: [
        {name: 'John Box', img: 'go.png'},
        {name: 'Marty Style', img: 'go.png'},
        {name: 'Tony Grisoni', img: 'go.png'},
        {name: 'John Box', img: 'go.png'},
        {name: 'Marty Style', img: 'go.png'},
        {name: 'Tony Grisoni', img: 'go.png'},
        {name: 'Marty Style', img: 'go.png'},
        {name: 'Tony Grisoni', img: 'go.png'},
        {name: 'Leila Wong', img: 'go.png'}
      ]
    };
  },
  onUserClick:function(e,i,u) {
    alert(i+' | '+u.text);
  },
  render:function() {
    var users = this.state.users.map(function(user){return {text: user.name};});
    return (
      React.createElement("div", {className: "search_tab"}, 
        React.createElement(TextField, {hintText: "Пошук", style: {width: '100%'}}), 
        React.createElement(Menu, {onItemClick: this.onUserClick, menuItems: users, autoWidth: false, zDepth: 0})
      )
    );
  }
});


