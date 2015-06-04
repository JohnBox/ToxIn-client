var React = require('react');
var { Paper, TextField, Menu } = require('material-ui');


module.exports = React.createClass({
  getInitialState() {
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
  onUserClick(e,i,u) {
    alert(i+' | '+u.text);
  },
  render() {
    var users = this.state.users.map((user)=>({text: user.name}));
    return (
      <div className="search_tab">
        <TextField hintText='Пошук' style={{width: '100%'}}/>
        <Menu onItemClick={this.onUserClick} menuItems={users} autoWidth={false} zDepth={0}/>
      </div>
    );
  }
});


