var React = require('react');
var StartPage = require('../StartPage/StartPage');

module.exports = React.createClass({
  getInitialState: function () {
    return {logined: false};
  },
  onLogin: function (logined) {
    this.setState({logined: logined});
  },
  render: function () {
    return (
      <div className="app">
        <StartPage onLogin={this.onLogin}/>
      </div>
    );
  }
});