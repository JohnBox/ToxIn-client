var React = require('react');
var $ = require('jquery');
var Cookie = require('js-cookie');
var ScrollBar = require('react-scrollbar');
var mui = require('material-ui');
var { Paper, TextField, Menu, SvgIcon } = mui;
var StylePropable = mui.Mixins.StylePropable;


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

var NewContactIcon = React.createClass({
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme() {
    return this.context.muiTheme.palette;
  },
  getStyles(){
    return {
      root: {
        float: 'right',
        opacity: '0.7',
        marginTop: '14px'
      },
      path: this.getTheme().textColor
    }
  },
  render() {
    var style = this.getStyles();
    return (
      <SvgIcon style={style.root}>
        <path fill={style.path} d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
      </SvgIcon>
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
    var username = Cookie.getJSON('user').username;
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'getallcontacts/',
        method: 'POST',
        data: {username: username},
        success: resolve,
        error: reject
      });
    });
  },
  onContactClick(e,i,p) {
    var contact = this.state.contacts[i];
    Cookie.set('contact', contact);
    this.props.set(3);
  },
  render() {
    var contacts = [];
    if (!this.state.contacts) {
      this.getAllContacts().then((data)=>{this.setState({contacts: data.a})});
    } else {
      contacts = this.state.contacts.map((c)=>({text: c.first_name+' '+c.last_name+' | '+c.id, icon: <Icon/>, iconRight: c.new?<NewContactIcon/>:null}));
    }
    return (
      <div className="home_tab">
        <ScrollBar>
          <Menu menuItems={contacts} onItemClick={this.onContactClick} autoWidth={false} zDepth={0}/>
        </ScrollBar>
      </div>
    );
  }
});
