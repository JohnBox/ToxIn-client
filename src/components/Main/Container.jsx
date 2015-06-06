var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;
var Transitions = mui.Styles.Transitions;
var UserWindow = require('../Window/UserWindow');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    var window = <img src="static/ti.png"/>;
    if (this.props.user) {
      window = <UserWindow/>;
    }
    return (
      <div className='container' style={this.props.style}>
        {window}
      </div>
    );
  }
});