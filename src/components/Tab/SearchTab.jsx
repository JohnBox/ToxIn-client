var React = require('react');
var ScrollBar = require('react-scrollbar');
var { Paper, TextField, Menu, SvgIcon } = require('material-ui');
var ghb = require('../Button/GitHubButton');

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
      <img src="go.png" alt="" style={style}/>
    );
  }
});

module.exports = React.createClass({
  getInitialState() {
    return {
      users: [
        {text: 'John Box', icon: <Icon/>},
        {text: 'Marty Style', icon: <Icon/>},
        {text: 'Tony Grisoni', icon: <Icon/>},
        {text: 'John Box', icon: <Icon/>},
        {text: 'Marty Style', icon: <Icon/>},
        {text: 'Tony Grisoni', icon: <Icon/>},
        {text: 'Marty Style', icon: <Icon/>},
        {text: 'Tony Grisoni', icon: <Icon/>},
        {text: 'John Box', icon: <Icon/>},
        {text: 'Marty Style', icon: <Icon/>},
        {text: 'Tony Grisoni', icon: <Icon/>},
        {text: 'Marty Style', icon: <Icon/>},
        {text: 'Tony Grisoni', icon: <Icon/>},
        {text: 'Leila Wong', icon: <Icon/>}
      ]
    };
  },
  render() {
    var users = this.state.users;
    return (
      <div className="search_tab">
        <TextField hintText='Пошук' style={{width: '100%'}} search={true}/>
        <ScrollBar>
          <Menu menuItems={users} autoWidth={false} zDepth={0}/>
        </ScrollBar>
      </div>
    );
  }
});


