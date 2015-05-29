var React = require('react');
var StartPage = require('../StartPage/StartPage');
var SideBar = require('../SideBar/SideBar');
var MessageBar = require('../MessageBar/MessageBar');


module.exports = React.createClass({
  getInitialState: function () {
    return {logined: !false};
  },
  onLogin: function (logined) {
    this.setState({logined: logined});
  },
  render: function () {
    if (this.state.logined) {
      return (
        <div className="app">
          <SideBar/>
          <MessageBar/>
        </div>
      );
    } else {
      return (
        <div className="app">
          <StartPage onLogin={this.onLogin}/>
        </div>
      );
    }
  }
});