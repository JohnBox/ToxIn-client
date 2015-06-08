var React = require('react');
var $ = require('jquery');
var ScrollBar = require('react-scrollbar');
var { Paper, TextField, Menu, SvgIcon } = require('material-ui');

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
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {contacts: null};
  },
  getAllContacts() {
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'getallcontacts/',
        method: 'POST',
        data: {user: 'gott'},
        success: resolve,
        error: reject
      });
    });
  },
  render() {

    var contacts = [];
    if (!this.state.contacts) {
      this.getAllContacts().then((data)=>{this.setState({contacts: data.a})});
    } else {
      contacts = this.state.contacts.map((c)=>({text: c, icon: <Icon/>}));
    }
    return (
      <div className="home_tab">
        <ScrollBar>
          <Menu menuItems={contacts} autoWidth={false} zDepth={0}/>
        </ScrollBar>
      </div>
    );
  }
});
