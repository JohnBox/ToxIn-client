var React = require('react');
var ScrollBar = require('react-scrollbar');
var $ = require('jquery');
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
    return {users: null};
  },
  getAllUsers() {
    return new Promise((resolve, reject)=>{
      $.ajax({
        url: this.props.url + 'getallusers/',
        method: 'POST',
        success: resolve,
        error: reject
      });
    });

  },
  render() {
    alert(this.state.users);
    var users;
    if (!this.state.users) {
      this.getAllUsers().then((data)=> {this.setState({users: data.a})}, (e)=> {alert(e)});
    } else {
      users = this.state.users.map((u)=>{text: u});
    }
    return (
      <div className="search_tab">
        <TextField hintText='Пошук' style={{width: '100%'}} search={true}/>
        <ScrollBar>
          <Menu menuItems={users} onItemClick={this.Info} autoWidth={false} zDepth={0}/>
        </ScrollBar>
      </div>
    );
  }
});


